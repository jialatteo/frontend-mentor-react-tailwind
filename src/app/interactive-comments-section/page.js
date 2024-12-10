"use client";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["400", "500", "700"],
});

export default function InteractiveCommentsSection() {
  return (
    <div className={`${rubik.className}`}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
        placeat. Odit voluptatum animi vero aperiam voluptates esse dolores
        obcaecati rerum?
      </p>
    </div>
  );
}
