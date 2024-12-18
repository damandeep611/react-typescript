import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useFeatureStore } from "./Store";

interface FeatureTitleProps {
  children: React.ReactNode;
  id: string;
}

export const FeatureTitle = ({ children, id }: FeatureTitleProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const documentRef = useRef(document);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px ",
    root: documentRef,
  });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const InViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    // setinview element
    if (isInView) setInViewFeature(id);
    if (!isInView && InViewFeature === id) setInViewFeature(id);
  }, [isInView, id, setInViewFeature, InViewFeature]);
  return (
    <p
      ref={ref}
      className={`feature-title py-16 font-heading  text-5xl ${
        isInView ? "text-black" : "text-gray-300"
      }`}
    >
      {children}
    </p>
  );
};
