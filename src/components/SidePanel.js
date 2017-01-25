import React, {Component} from 'react'
import './SidePanel.css';
import SidePanelItem from './SidePanelItem';

class SidePanel extends Component {
    render () {
        const {data} = this.props;
        const names = data.filter(datum => datum.name);
        return (
            <aside>
                <nav className="panel">
                    <p className="panel-heading fields-header">
                        Field Groups
                    </p>
                  
                {names.map((datum, index) => {
                    // console.log(datum.containing_object);
                    const containingObj = datum.containing_object || undefined;
                    return (
                        <SidePanelItem 
                        containingObj={containingObj}
                        handleItemClick={this.props.handleItemClick}
                        addRef={this.props.addRef}
                        key={index}
                        name={datum.name}
                        item={datum}
                    /> )
                }) }
                </nav>
                
                
            </aside>

        )
    }
}

export default SidePanel;