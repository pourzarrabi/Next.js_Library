"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Props<X> {
  type: "SIGN_IN" | "SIGN_UP";
  schema: ZodType<X>;
  defaultValues: X;
  onSubmit: (data: X) => Promise<{ success: boolean; error?: string }>;
}

const AuthForm = <X extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<X>) => {
  const router = useRouter();
  const isSignIn = type === "SIGN_IN";
  const form: UseFormReturn<X> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<X>,
  });

  const handleSubmit: SubmitHandler<X> = async (data) => {
    const result = await onSubmit(data);

    if (result.success) {
      toast.success("موفق", {
        description: isSignIn ? "با موفقیت وارد شدید" : "به مکتب خوش آمدید",
      });

      router.push("/");
    } else {
      toast.error(`خطای ${isSignIn ? "ورود" : "ثبت نام"}`, {
        description: "خطایی رخ داده است",
      });
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-xl font-semibold text-white text-center'>
        {isSignIn ? "به مکتب خوش آمدید!" : "حساب کاربری ایجاد نمایید!"}
      </h1>
      <p className='text-light-100 text-center'>
        {isSignIn
          ? "دسترسی آسان به جدیدترین کتب روز دنیا"
          : "لطفا برای دسترسی به کتابخانه ثبت نام نمایید."}
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className='space-y-6 w-full'
        >
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<X>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='capitalize'>
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    <Input
                      required
                      type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                      {...field}
                      className='form-input'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type='submit' className='form-btn'>
            {isSignIn ? "ورود" : "ثبت نام"}
          </Button>
        </form>
      </Form>
      <p className='text-center text-base font-medium'>
        {isSignIn ? "حساب ندارید؟" : "حساب دارید؟"}
        <Link
          href={isSignIn ? "/sign-up" : "/sign-in"}
          className='font-bold text-primary'
        >
          {isSignIn ? " ثبت نام کنید." : " وارد شوید."}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
