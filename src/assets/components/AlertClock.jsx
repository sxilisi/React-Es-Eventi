import Button from "./Button";

export default function AlertClock({onClick}) {
  return (
    <div>
      <p>click the button </p>
      <Button onClick={onClick} label="click me" />
    </div>
  );
}
