import Link from "next/link";
import Button from "@/app/components/Button";
import DialogBox from "@/app/components/DialogBox";
import InformationalLayout from "@/app/components/InformationalLayout";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full flex-col text-center">
      <DialogBox>
        <div className="flex flex-col items-center justify-around text-center min-h-full">
          <InformationalLayout
            header="Welcome to Diagnostic Screening"
            text="This survey is confidential and will be used solely by your provider
            to make the most informed decisions about your care. Please answer
            the questions to the best of your ability, and keep in mind when you
            make your selection you will be prompted automatically to the next
            question. You cannot return to previous questions, and please defer from refreshing the page during the survey. You will be
            notified upon completion."
          />
          <Link href="screening" aria-label="Begin the screening process.">
            <Button>Get Started</Button>
          </Link>
        </div>
      </DialogBox>
    </div>
  );
}
