import Link from "next/link";
import Button from "@/app/components/Button";
import DialogBox from "@/app/components/DialogBox";
import InformationalLayout from "@/app/components/InformationalLayout";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <DialogBox>
        <div className="h-full flex flex-col items-center justify-around text-center  ">
          <InformationalLayout
            header="Welcome to Blueprint Diagnostic Screening"
            text="This survey is confidential and will be used solely by your provider
            to make the most informed decisions about your care. Please answer
            the questions to the best of your ability, and keep in mind when you
            make your selection you will be prompted automatically to the next
            screen. You cannot return to previous questions. You will be
            notified upon completion of the survey."
          />
          <Link href="screening">
            <Button>Get Started</Button>
          </Link>
        </div>
      </DialogBox>
    </div>
  );
}
