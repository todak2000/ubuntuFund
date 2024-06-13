import { ReactElement } from "react";
import { FcGoogle } from "react-icons/fc";
import { cn } from "@/lib/styles/utils";
import { signInWithGoogle } from "@/lib/firebase/firebase";
import { createSession } from "@/lib/hooks/serverActions/auth";
import { useSelector } from "react-redux";
import { modal } from "@/lib/store";
import { useRouter } from "next/navigation";

type ButtonProps = {
  otherClass: string;
};

export const GoogleButton: React.FC<ButtonProps> = ({ otherClass }) => {
  const modall = useSelector(modal);
  const { push } = useRouter();
  const handleSignIn = async () => {
    const userUid = await signInWithGoogle();
    if (userUid) {
      await createSession(userUid);
    }
    if (modall.redirect) {
      push(modall.redirect);
    }
  };
  return (
    <>
      <button
        className={cn(
          otherClass,
          "w-full max-w-[200px] h-[46px] p-1 my-3 flex flex-row items-center justify-center space-x-3 text-xs"
        )}
        onClick={handleSignIn}
      >
        Continue with
        <FcGoogle className="ml-1 text-xl" />
      </button>
    </>
  );
};
