export const parseFormQuery = (
  values: any,
  dateFields: string[] = [],
  asJson = false,
  nullableFields: string[] = []
) => {
  const formData: any = new FormData();
  const formValues = { ...values };

  dateFields.forEach((field) => {
    if (
      formValues[field] !== null &&
      formValues[field] !== undefined &&
      formValues[field] !== ''
    ) {
      formValues[field] = formValues[field]
        .toISOString()
        .substring(0, 10) as unknown as Date;
    }
  });
  // console.log(formValues);
  if (asJson) {
    return formValues;
  }

  Object.entries(formValues).forEach(([key, val]) => {
    // console.log(key, val);
    if (val !== null && val !== undefined && val !== '') {
      if (Array.isArray(val)) {
        val.forEach((item) => {
          formData.append(`${key}[]`, item);
        });
      } else {
        formData.append(key, val as any);
      }
    }
  });
  nullableFields.forEach((field) => {
    formData.append(field, formValues[field] || null);
  });

  // console.log(JSON.stringify(Object.fromEntries(formData)));

  return formData;
};
