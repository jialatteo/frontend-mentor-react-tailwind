import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
});

export default function MultiStepForm() {
  return (
    <div className={`${ubuntu.className}`}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        accusamus delectus ab iusto expedita obcaecati consequatur blanditiis
        nemo et error?
      </p>
    </div>
  );
}
