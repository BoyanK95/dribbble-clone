import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";

const CreateProject = () => {
    return (
        <Modal>
            <h3 className='modal-head-text'>Create a New Project</h3>
            <ProjectForm/>
        </Modal>
    );
};

export default CreateProject;
