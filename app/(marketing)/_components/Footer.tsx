import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:w-auto flex items-start justify-between w-full">
          <div>
            <Button size="sm" variant="ghost">
              Privacy Policy
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Button size="sm" variant="ghost">
              Terms of service
            </Button>
            <div className="text-xs font-bold">
              © Sparsh Kumar™ <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
