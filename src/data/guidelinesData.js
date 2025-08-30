// src/data/guidelinesData.js

export const GUIDELINES = [
  {
    category: "Respiratory",
    drugs: [
      { name: "Salbutamol", details: "100 µg/puff, 2 puffs every 4-6 hours as needed for relief." },
      { name: "Budesonide", details: "200-400 µg/puff, 1-2 puffs twice daily (BD) for long-term control." },
      { name: "Prednisolone", details: "20-40 mg once daily (OD) for 5-7 days for acute exacerbations." },
      { name: "Amoxicillin ± clavulanic acid", details: "625 mg to 1 g thrice daily (TDS) for 7 days." },
      { name: "Ceftriaxone", details: "1-2 g intramuscular (IM) or intravenous (IV) once daily (OD) for 5-10 days." },
      { name: "Dextromethorphan", details: "10-20 mg every 4 hours as needed (PRN)." },
    ],
  },
  {
    category: "Cardiovascular",
    drugs: [
      { name: "Atenolol / Metoprolol", details: "25-50 mg OD to BD." },
      { name: "Amlodipine", details: "5-10 mg OD." },
      { name: "Captopril", details: "25-50 mg BD to TDS." },
      { name: "Hydrochlorothiazide", details: "12.5-25 mg OD." },
      { name: "Furosemide", details: "20-80 mg OD." },
      { name: "Simvastatin", details: "20-40 mg OD, typically in the evening." },
    ],
  },
  {
    category: "Gastrointestinal",
    drugs: [
      { name: "Omeprazole", details: "20-40 mg OD for 2-8 weeks." },
      { name: "Ranitidine", details: "150 mg BD (Note: widely withdrawn in many countries, use alternatives)." },
      { name: "Metronidazole", details: "400 mg TDS for 5-7 days." },
      { name: "Oral rehydration salts (ORS)", details: "Dissolve one sachet in 1 liter of water, take sips after each loose stool." },
      { name: "Loperamide", details: "4 mg stat, then 2 mg after each loose stool, max 16 mg/day." },
      { name: "Ondansetron", details: "4-8 mg OD to TDS as needed." },
    ],
  },
  {
    category: "Renal",
    drugs: [
      { name: "Enalapril", details: "5-10 mg OD to BD." },
      { name: "Losartan", details: "50-100 mg OD." },
      { name: "Furosemide", details: "20-80 mg OD or BD." },
      { name: "Calcium carbonate", details: "500 mg TDS with meals." },
      { name: "Erythropoietin-stimulating agents", details: "Dose is variable, administered subcutaneously (SC) weekly to monthly." },
      { name: "Sodium bicarbonate", details: "Varies by patient; typically 650 mg TDS." },
    ],
  },
  {
    category: "Obstetrics & Gynaecology",
    drugs: [
      { name: "Oxytocin", details: "10 IU IM or IV drip for postpartum haemorrhage." },
      { name: "Misoprostol", details: "600 µg oral (PO) or 800 µg rectally for postpartum haemorrhage." },
      { name: "Magnesium sulphate", details: "4 g IV over 20 min, followed by 1-2 g/hr IV maintenance." },
      { name: "Amoxicillin", details: "500 mg TDS for 7 days." },
      { name: "Clotrimazole", details: "100 mg vaginal suppository daily for 7 days." },
      { name: "Metronidazole", details: "400 mg BD for 7 days." },
    ],
  },
  {
    category: "Systemic",
    drugs: [
      { name: "Paracetamol", details: "500-1000 mg every 6-8 hours, max 4 g/day." },
      { name: "Ibuprofen / Diclofenac", details: "Ibuprofen: 200-400 mg every 6-8 hours. Diclofenac: 50 mg TDS." },
      { name: "Amoxicillin", details: "500 mg TDS for 5-7 days." },
      { name: "Co-trimoxazole", details: "960 mg BD for 7-14 days." },
      { name: "Ciprofloxacin", details: "500 mg BD for 7-14 days." },
      { name: "Gentamicin", details: "3-5 mg/kg/day IM or IV OD." },
    ],
  },
  {
    category: "Central Nervous System",
    drugs: [
      { name: "Diazepam", details: "5-10 mg IV stat for acute seizures, or 2-5 mg BD for anxiety." },
      { name: "Phenobarbitone", details: "60-120 mg OD." },
      { name: "Carbamazepine", details: "200 mg BD, with dosage titrated based on response." },
      { name: "Haloperidol", details: "5-10 mg IM for acute agitation or 2-5 mg PO BD for maintenance." },
      { name: "Amitriptyline", details: "25-50 mg OD at night." },
      { name: "Phenytoin", details: "100 mg TDS." },
    ],
  },
  {
    category: "Musculoskeletal",
    drugs: [
      { name: "Diclofenac", details: "50 mg TDS." },
      { name: "Ibuprofen", details: "200-400 mg every 6-8 hours." },
      { name: "Paracetamol", details: "500-1000 mg every 6-8 hours." },
      { name: "Prednisone", details: "10-40 mg OD for acute flares, tapered over 1-2 weeks." },
      { name: "Colchicine", details: "0.5 mg BD for acute gout, max 2 mg/day." },
      { name: "Calcium + vitamin D", details: "Dose varies; often 500-1000 mg elemental calcium OD-BD plus 400-800 IU vitamin D." },
    ],
  },
  {
    category: "Endocrinology",
    drugs: [
      { name: "Insulin", details: "Dosed individually based on blood sugar monitoring." },
      { name: "Metformin", details: "500-1000 mg BD with meals." },
      { name: "Glibenclamide", details: "2.5-5 mg OD." },
      { name: "Levothyroxine", details: "50-100 µg OD, with dose titrated based on thyroid-stimulating hormone (TSH) levels." },
      { name: "Hydrocortisone", details: "20-30 mg daily, split into BD or TDS doses." },
      { name: "Prednisone/prednisolone", details: "5-10 mg OD." },
    ],
  },
];