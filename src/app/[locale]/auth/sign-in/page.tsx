import { Form } from "@/components/auth/sign-in/Form";
import { SignInWithGoogle } from "@/components/auth/sign-in/SignInWithGoogle";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Link from "next/link";

export default function SignInPage() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     // Handle sign in logic here
  //     console.log("Sign in with:", email, password);
  //   };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Curve SVG */}
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <defs>
          {" "}
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            {" "}
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(0,0,0,0.05)"
              strokeWidth="1"
            />{" "}
          </pattern>{" "}
        </defs>{" "}
        <rect width="100%" height="100%" fill="url(#grid)" />{" "}
      </svg>
      <svg
        className="absolute inset-x-[28rem] md:inset-x-[40rem] lg:inset-x-[80rem] inset-y-28 md:inset-y-36 lg:inset-y-[300px] w-full h-full -z-10 scale-[3] md:scale-[2] lg:scale-150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 1000"
      >
        <path
          d="  M2 356.009C178.338 132.901 348 33.5162 528 98.5094C708 163.503 677 289.512
      481.5 213.507C286 137.502 373 -8.49639 491 4.0018C609 16.5 771.5 134 816.5
      222.502"
          stroke="#E5E7B5"
          strokeWidth="4"
        />
      </svg>
      <svg
        className="absolute inset-x-[14rem] -rotate-45 md:-rotate-0 lg:-inset-x-[12rem] -inset-y-16 md:inset-y-64 lg:inset-y-[40rem] w-full h-full -z-10 scale-150 lg:scale-100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 1000"
      >
        <path
          d="M2 21.9905C409.659 250.383 827 72.9807 988.5 21.9905C1150 -28.9997 1229 36
      1274 59.9905"
          stroke="#E5E7B5"
          strokeWidth="6"
        />
      </svg>
      <Card
        shadow="md"
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10 bg-white py-8 px-4 sm:rounded-lg sm:px-10"
      >
        <CardHeader className="flex-col">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to Artistry
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Welcome back to creative hand-crafts Academy
          </p>
        </CardHeader>
        <CardBody>
          <Form />
          <SignInWithGoogle />
        </CardBody>

        <CardFooter className="mt-6">
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Create an account
              </Link>
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
