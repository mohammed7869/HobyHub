import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogOverlay,
} from "@/components/ui/dialog"

interface PopupScreenProps {
    open: boolean;
    setOpen: (open: boolean) => void;
  }

export function AuthDialog({ open, setOpen  }: PopupScreenProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
  <DialogOverlay className="bg-[#003161] opacity-[50%] fixed inset-0" />
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex-col gap-4 py-4">
        <div className="justify-center text-black text-[35px] font-medium font-['Minion_Pro']">Login and View</div>
        <div className="justify-center text-black text-xl font-medium font-['Minion_Pro']">You have to login first to see class location</div>
        </div>
        <DialogFooter>
        <Button type="button">Sign Up</Button>
          <Button type="submit">Login</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
