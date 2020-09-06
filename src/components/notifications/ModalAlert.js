import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./ModalAlert.css";

const ModalAlert = () => {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    title: <p>You cannot add more than 5 nominates.</p>,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    buttonsStyling: false,
    customClass: {
      title: "modal-title",
      confirmButton: "confirm-button-class",
    },
  });
};

export default ModalAlert;
