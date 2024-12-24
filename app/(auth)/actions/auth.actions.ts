"use server";
import { redirect } from "next/navigation";
import { AuthSchema } from "../schemas/auth.schema";
import { get, post } from "../../../lib/api-client";
import { LoginDto, SignupDto } from "@/types/dtos";
import { ApiError } from "@/types/api-error";
import { cookies } from "next/headers";
import { User } from "@/types/types";

export async function login(prevSate: any, formData: FormData) {
  const result = AuthSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await post<LoginDto, any>("/auth/login", result.data, {}, true);
    const setCookieHeaders = res?.headers.get("set-cookie");
    if (!setCookieHeaders) {
      return {
        errors: {
          email: "An unexpected error occurred, please try again",
          password: [],
        },
      };
    }
    const cookieString = setCookieHeaders[0];
    const accessTokenMatch = cookieString.match(/access_token=([^;]+)/);
    const access_token = accessTokenMatch[1];

    cookies().set({ name: "access_token", value: access_token });
  } catch (error: any) {
    if (error instanceof ApiError) {
      return {
        errors: {
          email: error.message,
          password: [],
        },
      };
    }

    return {
      errors: {
        email: "An unexpected error occurred, please try again",
        password: [],
      },
    };
  }

  redirect("/typing/practice");
}

export async function signup(prevSate: any, formData: FormData) {
  const result = AuthSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      password: [],
    };
  }

  try {
    const res = await post<SignupDto, any>("/auth/signup", result.data);
  } catch (error: any) {
    if (error instanceof ApiError) {
      return {
        errors: {
          email: error.message,
          password: [],
        },
      };
    }

    return {
      errors: {
        email: "An unexpected error occurred, please try again",
        password: [],
      },
    };
  }
  redirect("/login");
}

export async function logout() {
  cookies().delete("access_token");
  redirect("/");
}

export async function getUser() {
  try {
    const res = await get<User>("/user/me");
  } catch (error: any) {}
}
