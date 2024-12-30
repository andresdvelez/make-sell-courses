"use client";

import { Button, Input } from "@nextui-org/react";
import zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { credentialslogIn } from "@/app/actions/auth";
import { toast } from "sonner";
import { useRouter } from "@/i18n/routing";
import { signInSchema } from "@/lib/schemas/sign-in";
import { useAuthStore } from "@/stores/user-store";

type SignInInputs = zod.infer<typeof signInSchema>;

export const Form = () => {
  const setUser = useAuthStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>({
    resolver: zodResolver(signInSchema),
  });
  const router = useRouter();

  const onSubmit = async (data: SignInInputs) => {
    try {
      const user = await credentialslogIn(data.email, data.password);
      setUser(user);
      //   router.replace("/app");
      toast.success("Login successful");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Login failed");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email address"
        {...register("email")}
        type="email"
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email}
        autoComplete="email"
        variant="bordered"
        className="appearance-none block w-full placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />

      <Input
        label="Password"
        {...register("password")}
        type="password"
        errorMessage={errors.password?.message}
        isInvalid={!!errors.password}
        variant="bordered"
        autoComplete="current-password"
        className="appearance-none block w-full placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />

      <Button
        type="submit"
        radius="full"
        className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium bg-blue-200 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
      >
        Sign in
      </Button>
    </form>
  );
};
