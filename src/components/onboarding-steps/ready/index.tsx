import { ArrowLeft } from "lucide-react";
import { FC } from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface Props {
  goToPreviousStep: () => void;
  current: boolean;
}

const Ready: FC<Props> = ({ goToPreviousStep, current }) => {
  return (
    <div
      className={cn({
        hidden: !current,
      })}
    >
      <div className="flex justify-center relative items-center">
        <Button
          className="absolute left-0"
          size="icon"
          variant="ghost"
          onClick={() => goToPreviousStep()}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-semibold tracking-tight">🥳 Todo listo</h1>
      </div>
      <h1 className="text-lg mt-4 tracking-tight">
        Si ya terminaste tu onboarding, puedes cerrar esta página
      </h1>
    </div>
  );
};

export default Ready;
