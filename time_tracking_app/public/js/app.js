class TimerDashboard extends React.Component{

    render(){
        return(
            <div className='ui three columngrid centered '>
                <div className='column'>
                    <EditableTimerList/>
                    <ToggleableTimerForm
                        isOpen={true}
                    />
                </div>
            </div>
        );
    }
}
