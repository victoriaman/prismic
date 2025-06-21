import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="sm" className="font-semibold text-center mb-4">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-center text-slate-600 mb-8">{children}</p>
  )
}

/**
 * Props for `Login`.
 */
export type LoginProps = SliceComponentProps<Content.LoginSlice>;

/**
 * Component for "Login" Slices.
 */
const Login: FC<LoginProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>

      <div className="grid gap-8 md:grid-cols-2 max-w-4xl m-auto shadow-xl md:px-12 px-4 py-12 place-items-center 
      rounded-lg bg-gradient-to-tr from-cyan-50 via-white to-emerald-50">

        <PrismicNextImage
          field={slice.primary.image}
          className="rounded-lg"
        />

        <div className="grid gap-4">
          <PrismicRichText field={slice.primary.heading}
            components={components}
          />

          <Button field={slice.primary.logingooglebutton}>
            {slice.primary.logingooglebuttontext}
          </Button>

          <Button field={slice.primary.logintwitterbutton}>
            {slice.primary.logintwitterbuttontext}
          </Button>

          <PrismicRichText field={slice.primary.separator}
            components={components}
          />

          <label className="text-slate-600">
            {slice.primary.usernamelabel}
          </label>
          <input type="text" name="userName" className="w-full px-4 py-2 border border-slate-300 rounded" />

          <label className="text-slate-600">
            {slice.primary.passwordlabel}
          </label>
          <input type="text" name="password" className="w-full px-4 py-2 border border-slate-300 rounded" />

          <PrismicNextLink field={slice.primary.forgetpasswordlink} className="underline text-right">
            {slice.primary.forgetpasswordtext}
          </PrismicNextLink>

          <p className="block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wide">
            <input type="button" name='{slice.primary.signinbuttontext}' value="Sign in" />
          </p>

          <div className="flex">
            <p>{slice.primary.nothaveaccounttext}</p>
            <p className="pl-1 underline">{slice.primary.signuptext}</p>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Login;
