import Link from "next/link";
import Logo from "~/components/logo";
import OnboardingSteps from "~/components/onboarding-steps";
import ThemeSetter from "~/components/theme-setter";

export default function Home() {
  return (
    <>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-3 lg:px-0">
        <ThemeSetter />
        <div className="relative hidden h-[100vh] flex-col p-10 text-white lg:flex dark:border-r col-span-1">
          <div className="absolute inset-0 bg-muted" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Logo />
          </div>

          <div className="relative z-20 my-auto">
            <blockquote className="space-y-2">
              <p className="text-3xl text-foreground">
                👋 Bienvenido a Plumaa ID
              </p>
              <p className="text-2xl text-foreground">
                Utiliza este sitio para transferir los archivos de tu e.firma a
                la aplicación de Plumaa ID{" "}
                <span className="font-bold">sin subirlos a la nube.</span>
              </p>
              <footer className="text-sm text-foreground">
                🤫 Puedes apagar el WiFi en esta app para mayor seguridad
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 col-span-2">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[500px]">
            <div className="w-full">
              <OnboardingSteps />
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              Al utilizar este servicio, aceptas nuestros{" "}
              <Link
                href="https://app.plumaa.id/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-primary"
              >
                Términos de Servicio
              </Link>{" "}
              and{" "}
              <Link
                href="https://app.plumaa.id/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-primary"
              >
                Aviso de Privacidad
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
