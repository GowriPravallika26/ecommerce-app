import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button data-testid="signout-button" onClick={() => signOut()}>
        Sign Out
      </button>
    );
  }

  return (
    <button data-testid="signin-button" onClick={() => signIn()}>
      Sign In
    </button>
  );
}
