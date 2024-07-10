import CheckIcon from '@mui/icons-material/Check';

interface CheckCircleIconProps {
  isChecked: boolean;
}

export default function CheckCircleIcon({ isChecked }: CheckCircleIconProps) {
  return (
    <div
      className={`w-10 h-10 flex items-center justify-center border-2 rounded-full cursor-pointer ${
        isChecked ? 'bg-green-500 border-green-500' : 'border-black'
      }`}
    >
      <CheckIcon
        className={`w-6 h-6 ${isChecked ? 'text-white' : 'text-black'}`}
      />
    </div>
  );
}
