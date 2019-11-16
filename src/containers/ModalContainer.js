import React, {Component} from 'react';
import DishesInfoModalContent from "../components/modals/DishesModalContent";

class ModalContainer extends Component {

    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleCloseAccountMenu = this.handleCloseAccountMenu.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleCloseAccountMenu);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleCloseAccountMenu(event) {

        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.close()
        }
    }

    render() {
        return (
            <>
                {
                    this.props.isOpen && <div className="fixed-overlay" >
                        <div className="modal" ref={this.setWrapperRef}>
                            <div className="modal-header">
                                <div className="modal-name"><h2>{this.props.content.modalTitle}</h2></div>
                                <i className="fas fa-times hover" onClick={this.props.close}/>
                            </div>
                            <div className="modal-content">
                                {this.props.content.modalContent}
                            </div>
                            <div className="modal-actions">
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
}


export default ModalContainer;
