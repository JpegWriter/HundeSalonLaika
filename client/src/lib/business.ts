// Legal / company details — source of truth is the Impressum.
export const businessInfo = {
  legalName: "Hundesalon Laika – Dog Grooming e.U.",
  shortName: "Hundesalon Laika",
  owner: "Dominique ADEY BALINOVA",
  legalForm: "Einzelunternehmen",
  street: "Grünentorgasse 8",
  postalCode: "1090",
  city: "Wien",
  country: "Österreich",
  phone: "+43 650 861 3405",
  email: "hundesalonlaika@gmail.com",
  website: "www.hundesalon-laika.at",
  vatId: "ATU69689517",
  companyRegisterNumber: "FN 435362p",
  companyRegisterCourt: "Wien",
  bank: "Wise, EUR, BE71 9677 8443 9669 (Dominique Adey Balinova)",
} as const;

export const businessAddressLine = `${businessInfo.street}, ${businessInfo.postalCode} ${businessInfo.city}`;
