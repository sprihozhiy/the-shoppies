import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./ModalAlert.css";

const ModalAlert = () => {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    title: <p>You have already added 5 nominees!</p>,
    text:
      "If you want to add this movie to the nominates you should revise your current nominees list.",
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
