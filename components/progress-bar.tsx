interface ProgressBarProps {
    current: number
    max: number
  }
  
  export function ProgressBar({ current, max }: ProgressBarProps) {
    const percentage = Math.min((current / max) * 100, 100)
  
    return (
      <div className="w-full max-w-md bg-white rounded-full h-6 dark:bg-gray-700">
        <div
          className="bg-[#0d3c26] h-6 rounded-full transition-all duration-500 ease-out flex items-center justify-center"
          style={{ width: `${percentage}%` }}
        >
          <span className="text-white text-xs font-medium">{Math.round(percentage)}%</span>
        </div>
      </div>
    )
  }
  
  