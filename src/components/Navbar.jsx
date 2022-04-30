import '../css/nav.css'
import {Component} from 'react';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import { popoverClick } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { popoverHoverFocus } from 'react-bootstrap';
import { popoverClickRootClose } from 'react-bootstrap';


// const popoverFocus = (
//     <Popover id="popover-trigger-focus" title="Popover bottom">
//       <strong>Holy guacamole!</strong> Check this info.
//     </Popover>
//   );
//   <ButtonToolbar>
//   <OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick}>
//     <Button>Click</Button>
//   </OverlayTrigger>
//   <OverlayTrigger
//     trigger={['hover', 'focus']}
//     placement="bottom"
//     overlay={popoverHoverFocus}
//   >
//     <Button>Hover + Focus</Button>
//   </OverlayTrigger>
//   <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverFocus}>
//     <Button>Focus</Button>
//   </OverlayTrigger>
//   <OverlayTrigger
//     trigger="click"
//     rootClose
//     placement="bottom"
//     overlay={popoverClickRootClose}
//   >
//     <Button>Click w/rootClose</Button>
//   </OverlayTrigger>
// </ButtonToolbar>


class Navbar extends Component {
    
    render(
       
        
    ) {
        return (
            <div className='navbar'>    
                <span className="name">Energy System</span>
                {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton> */}
           
            
            </div>

            
        )
    }
}

export default  Navbar;