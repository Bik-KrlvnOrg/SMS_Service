export class FeesPaidDto{
    id?: number;
  
    studentId: number;
  
    classId: number;
  
    particularId: number;
  
    particulartName: string;
  
    feeAmount: number;
  
    createdDate?: Date;
  
    academicYear?: string;
  
    comments?: string;
  
    installment: number;
  
    fromDate: Date;
  
    toDate: Date;
  
    voucherEntryId: number;
  
    waived?: string;
}