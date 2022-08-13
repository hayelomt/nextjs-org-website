import { useFormik } from 'formik';
import * as Yup from 'yup';
import useSendMultipart from '../../../core/hooks/useSendMultipart';
import { toastError, toastMessage } from '../../../core/ui/utils/alert';
import { parseFormQuery } from '../../../core/utils/form';
import { parseValidationErrors } from '../../../core/utils/validation';
import { Vacancy, VacancyCreate } from '../vacancy';

export const useCreateJobFormController = (
  vacancy: Vacancy,
  onDone: () => void
) => {
  const { callApi, submitting, progress } = useSendMultipart();
  const initialValues: VacancyCreate = {
    vacancy_id: vacancy.id,
    fname: '',
    lname: '',
    email: '',
    phone: '',
    cv: null,
  };

  const validationSchema = Yup.object({
    vacancy_id: Yup.string()
      .required('Required')
      .max(254, "Can't exceed 254 characters"),
    fname: Yup.string()
      .required('Required')
      .max(254, "Can't exceed 254 characters"),
    email: Yup.string()
      .email('Invalid email address')
      .max(254, "Can't exceed 254 characters")
      .required('Required'),
    lname: Yup.string()
      .required('Required')
      .max(254, "Can't exceed 254 characters"),
    phone: Yup.string()
      .required('Required')
      .max(254, "Can't exceed 254 characters"),
  });

  const formik = useFormik<VacancyCreate>({
    initialValues,
    validationSchema,
    onSubmit: async (value, { setFieldError }) => {
      const data = parseFormQuery(value);

      await callApi('vacancy-applications', data, {
        onSuccess: () => {
          toastMessage('successfully submitted cv');
          formik.resetForm();
          onDone();
        },
        onError: () => toastError('Something went wrong, try again in a while'),
        onValidationError: (err) => parseValidationErrors(err, setFieldError),
      });
    },
  });

  return { formik, submitting, progress };
};
