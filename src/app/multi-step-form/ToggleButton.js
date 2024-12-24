export default function ToggleButton() {
  return (
    <label for="toggle" className="cursor-pointer">
      <input type="checkbox" id="toggle" class="peer appearance-none" />
      <div class="relative block h-9 w-16 rounded-full bg-blue-900 p-1 before:absolute before:left-1 before:h-7 before:w-7 before:rounded-full before:bg-blue-600 before:p-1 before:transition-all before:duration-500 peer-checked:before:left-8 peer-checked:before:bg-white"></div>
    </label>
  );
}
