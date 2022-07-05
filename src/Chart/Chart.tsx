import { Gantt, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import tasks from './tasks.ts';
import "gantt-task-react/dist/index.css";

function Chart() {
    return <div style={{direction: 'rtl'}}>
      <Gantt 
        tasks={tasks} 
        viewMode={ViewMode.Hour} 
        rtl={true}
      />
    </div>
}

export default Chart