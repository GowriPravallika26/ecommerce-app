const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Laptop",
        description: "High performance laptop",
        price: 999,
        imageUrl: "https://via.placeholder.com/300"
      },
      {
        name: "Phone",
        description: "Latest smartphone",
        price: 599,
        imageUrl: "https://via.placeholder.com/300"
      }
    ]
  });

  await prisma.user.create({
    data: {
      name: "Test User",
      email: "test.user@example.com"
    }
  });
}

main().finally(() => prisma.$disconnect());
