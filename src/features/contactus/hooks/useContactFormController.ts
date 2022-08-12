import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSendApiData } from '../../../core/hooks/useSendApiData';
import { toastError, toastMessage } from '../../../core/ui/utils/alert';
import { parseValidationErrors } from '../../../core/utils/validation';
import { ContactCreate } from '../contact';

export const useCreateContactController = () => {
  const { callApi, submitting } = useSendApiData();
  const initialValues: ContactCreate = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(20, 'Must be 15 characters or less')
      .required('Required'),
    subject: Yup.string()
      .max(254, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().max(2000).required('Required'),
  });

  const formik = useFormik<ContactCreate>({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setFieldError, resetForm }) => {
      await callApi({
        endpoint: 'contacts',
        data: values,
        onSuccess: () => {
          resetForm();
          toastMessage('Form sent successfully');
        },
        onError: () => toastError('Something went wrong, try again'),
        onValidationError: (err) => parseValidationErrors(err, setFieldError),
      });
    },
  });

  return { formik, submitting };
};
