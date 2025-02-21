import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
  
  interface CongratulationsModalProps {
    isOpen: boolean
    onClose: () => void
    isWinner: boolean
  }
  
  export function CongratulationsModal({ isOpen, onClose, isWinner }: CongratulationsModalProps) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isWinner ? "Congratulations, Decision Master!" : "Good Job!"}</DialogTitle>
            <DialogDescription>
              {isWinner
                ? "You've reached 100 points and mastered all scenarios! You're now a certified Decision Master!"
                : "You've made a decision and earned points! Keep going to become a Decision Master!"}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={onClose} className="bg-[#0d3c26] text-white hover:bg-[#daf2ce] hover:text-[#0d3c26]">
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }
  
  