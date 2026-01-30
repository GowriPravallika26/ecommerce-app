import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../lib/prisma";
import { z } from "zod";

const schema = z.object({
  productId: z.string(),
  quantity: z.number().min(1).optional()
});

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).end();

  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  });

  const cart = await prisma.cart.upsert({
    where: { userId: user.id },
    update: {},
    create: { userId: user.id }
  });

  if (req.method === "GET") {
    const items = await prisma.cartItem.findMany({
      where: { cartId: cart.id },
      include: { product: true }
    });
    return res.json(items);
  }

  if (req.method === "POST") {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(parsed.error);

    const item = await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: parsed.data.productId,
        quantity: parsed.data.quantity || 1
      }
    });
    return res.json(item);
  }

  if (req.method === "DELETE") {
    await prisma.cartItem.deleteMany({
      where: { cartId: cart.id, productId: req.body.productId }
    });
    return res.json({ success: true });
  }

  res.status(405).end();
}
