"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { login } from "../../actions/auth.actions";
import useActionStateFn from "@/hooks/useActionStateFn";
import { useAuthStore } from "@/store";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);

  const { login: loginStateFn } = useAuthStore();

  return (
    <Card className="mx-auto max-w-sm ">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
              />
              {state?.errors?.email && (
                <div className="text-red-500 text-xs">
                  {state?.errors?.email}
                </div>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" name="password" />
              {state?.errors?.password && (
                <div className="text-red-500 text-xs">
                  {state?.errors?.password}
                </div>
              )}
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
          <div className="mt-4 text-center text-sm">
            Continue as a{" "}
            <Link href="/" className="underline">
              Guest?
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
