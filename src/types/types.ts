export type Example= {
    ornek_id: string;
    anlam_id: string;
    ornek_sira: string;
    ornek: string;
    yazar?: Yazar[];
  }
  
  export type Yazar= {
    yazar_id: string;
    tam_adi: string;
  }
  
  export type Meaning= {
    anlam_id: string;
    madde_id: string;
    anlam_sira: string;
    fiil: string;
    tipkes: string;
    anlam: string;
    anlam_html: string;
    gos: string;
    gos_kelime: string;
    gos_kultur: string;
    orneklerListe?: Example[];
  }
  
  export type Idiom= {
    madde_id: string;
    madde: string;
    on_taki: string | null;
  }
  
  export type DictionaryApiResponseType= {
    madde_id: string;
    kac: string;
    kelime_no: string;
    cesit: string;
    anlam_gor: string;
    on_taki: string | null;
    on_taki_html: string | null;
    madde: string;
    madde_html: string;
    cesit_say: string;
    anlam_say: string;
    taki: string;
    cogul_mu: string;
    ozel_mi: string;
    egik_mi: string;
    lisan_kodu: string;
    lisan: string;
    telaffuz_html: string;
    lisan_html: string;
    telaffuz: string;
    birlesikler: string;
    font: string | null;
    madde_duz: string;
    gosterim_tarihi: string | null;
    anlamlarListe: Meaning[];
    atasozu: Idiom[];
  }
  
  export type DictionaryData= {
    word: string;
    meanings: {
      meaning: string;
      examples: Example[];
    }[];
    idioms: Idiom[];
  }
  