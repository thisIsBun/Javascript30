import { NavLink } from "react-router";

interface DemoNoteButtonsProps {
  challengeId: string;
  buttonName: string;
}

const DemoNoteButtons: React.FC<DemoNoteButtonsProps> = ({
  challengeId,
  buttonName,
}) => {
  return (
    <div className="fixed right-6 bottom-6 space-x-4">
      <NavLink
        to={`/challenges/${challengeId}/${buttonName.toLowerCase()}`}
        className="button-bg"
      >
        Go to {buttonName}
      </NavLink>
      <NavLink to="/" className="button-bg">
        Go to Home
      </NavLink>
    </div>
  );
};

export default DemoNoteButtons;
