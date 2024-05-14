import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
    cardHolderName: Yup.string().required("Kart sahibinin adı zorunludur"),
    cardNumber: Yup.string()
      .required("Kart numarası zorunludur")
      .matches(/^\d{4} \d{4} \d{4} \d{4}$/, "Geçerli bir kart numarası giriniz"),
    expireDate: Yup.string()
      .required("Zorunlu alan")
      .matches(
        /^(0[1-9]|1[0-2])\/\d{2}$/,
        "Geçerli bir son kullanma tarihi giriniz (DD/YY)"
      ),
    cvv: Yup.string()
      .required("CVV/CVC zorunludur")
      .matches(/^\d{3}$/, "Geçerli bir CVV/CVC giriniz"),
  });