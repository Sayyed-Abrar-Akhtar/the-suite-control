import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';

// Compound Component
function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens='cabin-form'>
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name='cabin-form'>
          <CreateCabinForm />
        </Modal.Window>

        {/* 
        <Modal.Open opens='table'>
          <Button>Add new Cabin</Button>
          </Modal.Open>
          <Modal.Window name='table'>
          <CreateCabinForm />
        </Modal.Window> 
      */}
      </Modal>
    </div>
  );
}

// // Normal Component

// function AddCabin() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsModalOpen((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isModalOpen && (
//         <Modal onClose={() => setIsModalOpen(false)}>
//           <CreateCabinForm onCloseModal={() => setIsModalOpen(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
