import { ReactComponent as Progress } from '../assests/Icons/in-progress.svg';
import { ReactComponent as Done } from '../assests/Icons/Done.svg';
import { ReactComponent as Cancelled } from '../assests/Icons/Cancelled.svg';
import { ReactComponent as HighPriority } from '../assests/Icons/Img-HighPriority.svg';
import { ReactComponent as LowPriority } from '../assests/Icons/Img-LowPriority.svg';
import { ReactComponent as MediumPriority } from '../assests/Icons/Img-MediumPriority.svg';
import { ReactComponent as NoPriority } from '../assests/Icons/No-priority.svg';
import { ReactComponent as UrgentColor } from '../assests/Icons/SVG-UrgentPrioritycolour.svg';
import { ReactComponent as Urgent } from '../assests/Icons/SVG-UrgentPrioritygrey.svg';
import { ReactComponent as ToDo } from '../assests/Icons/To-do.svg';
import { ReactComponent as Backlog } from '../assests/Icons/Backlog.svg';


export const getPriorityIcon = (priority) => {
  switch (priority) {
    case 'No priority':
      return <NoPriority />;
    case 'Low':
      return <LowPriority />;
    case 'Medium':
      return <MediumPriority />;
    case 'High':
      return <HighPriority />;
    case 'Urgent':
      return <UrgentColor />;
    default:
      return <Urgent />;
  }
};

export const getStatusIcon = (status) => {
  switch (status) {
    case 'Backlog':
      return <Backlog />;
    case 'Todo':
      return <ToDo />;
    case 'In progress':
      return <Progress/>;
    case 'Done':
      return < Done />;
    case 'Canceled':
      return <Cancelled />;
    default:
      return <Cancelled />;
  }
};
