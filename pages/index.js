import Link from "next/link";
import Button from "@/app/components/Button";
import DialogBox from "@/app/components/DialogBox";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <DialogBox>
        <div className="h-full flex flex-col items-center justify-around text-center  ">
          <h2 className="text-2xl font-extrabold">
            Welcome to Blueprint Diagnostic Screening
          </h2>
          <p className="font-bold">
            This survey is confidential and will be used solely by your provider
            to make the most informed decisions about your care. Please answer
            the questions to the best of your ability, and keep in mind when you
            make your selection you will be prompted automatically to the next
            screen. You cannot return to previous questions. You will be
            notified upon completion of the survey.{" "}
          </p>
          <Link href="screening">
            <Button children={"Get Started"} />
          </Link>
        </div>
      </DialogBox>
    </div>
  );
}
