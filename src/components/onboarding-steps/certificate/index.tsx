import { ArrowRight, ChevronRight } from "lucide-react";
import { FC, useEffect, useMemo, useState } from "react";
import QRCode from "react-qr-code";
import { Dropzone } from "~/components/dropzone";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface Props {
  current: boolean;
  goToNextStep: () => void;
}

const Certificate: FC<Props> = ({ current, goToNextStep }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [arrayBuffer, setArrayBuffer] = useState<ArrayBuffer | null>(null);

  useEffect(() => {
    if (files.length === 0) return;
    files[0].arrayBuffer().then((b) => setArrayBuffer(b));
  }, [files]);

  const base64File = useMemo(() => {
    if (!arrayBuffer) return null;

    return Buffer.from(arrayBuffer).toString("base64");
  }, [arrayBuffer]);

  return (
    <div
      className={cn({
        hidden: !current,
      })}
    >
      <div className="flex flex-col space-y-4 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          QR de tu certificado
        </h1>
        {!base64File ? (
          <Dropzone
            className="w-full h-48"
            accept=".cer"
            cta="Arrastra tu certificado (.cer) aquí"
            onChange={(f) => setFiles(f)}
            hideFileInfo
          />
        ) : (
          <>
            <div className="p-5 bg-white rounded-md mx-auto">
              <QRCode value={base64File} />
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              Escanea este QR desde el setup en la app de Plumaa ID para
              transferirlo.
            </p>
            <Button onClick={goToNextStep} variant="secondary">
              Siguiente <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Certificate;
