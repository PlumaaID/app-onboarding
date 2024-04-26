import { ArrowLeft, FileWarningIcon, Terminal } from "lucide-react";
import { FC } from "react";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
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
        <h1 className="text-2xl font-semibold tracking-tight text-center">
          🥳 Todo listo
        </h1>
      </div>
      <h1 className="text-lg my-7 tracking-tight text-center">
        Si ya terminaste tu onboarding, puedes cerrar esta página.
      </h1>
      <Alert>
        <FileWarningIcon className="h-4 w-4" />
        <AlertTitle>Recuerda respaldar tu llave privada</AlertTitle>
        <AlertDescription>
          Al ser tu identidad, Plumaa ID no guarda una copia y no puede
          recuperarla si la pierdes.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default Ready;
