export interface LegalSection {
  id: string;
  title: string;
  content: string;
}

export interface LegalPageContent {
  metaTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  introduction: string;
  tableOfContents: string;
  sections: {
    [key: string]: {
      title: string;
      content: string;
    };
  };
}

export interface TermsContent extends LegalPageContent {
  sections: {
    acceptance: {
      title: string;
      content: string;
    };
    services: {
      title: string;
      content: string;
    };
    intellectualProperty: {
      title: string;
      content: string;
    };
    userAccounts: {
      title: string;
      content: string;
    };
    prohibitedUses: {
      title: string;
      content: string;
    };
    limitationLiability: {
      title: string;
      content: string;
    };
    termination: {
      title: string;
      content: string;
    };
    governingLaw: {
      title: string;
      content: string;
    };
    changes: {
      title: string;
      content: string;
    };
    contact: {
      title: string;
      content: string;
    };
  };
}
