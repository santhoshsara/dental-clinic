export const CLINIC_INFO = {
  name: "Dr. Kaviya's K Smile",
  tagline: "Dentistry & Cosmetology Clinic",
  subtitle: "Where Clinical Dental Precision Meets Advanced Facial Artistry",
  doctor: "Dr. Kaviya",
  credentials: "BDS | Certified Facial Aesthetician & Cosmetologist",
  phone: "+91 7550148683",
  phoneRaw: "917550148683",
  address: "1/2, Velmurugan Colony Rd, behind Pantaloons, Arunachalam Nagar, Keelkattalai, Tambaram, Tamil Nadu 600117",
  mapUrl: "https://maps.app.goo.gl/Yt1tD7d8MSrVqtos5",
  hours: [
    { days: "Monday - Friday", time: "8:00 AM - 7:00 PM" },
    { days: "Saturday", time: "9:00 AM - 2:00 PM" },
    { days: "Sunday", time: "By Prior Appointment Only" }
  ]
};

export const SERVICE_CATEGORIES = [
  { id: "all", label: "All Treatments", icon: "Sparkles" },
  { id: "dentistry", label: "Dentistry & Smile", icon: "ShieldCheck" },
  { id: "cosmetology", label: "Skin & Glow", icon: "Flame" },
  { id: "contouring", label: "Facial Sculpting & Anti-Aging", icon: "Smile" },
  { id: "hair", label: "Hair & Trichology", icon: "Zap" },
];

export const SERVICES_LIST = [
  // ==========================================
  // --- 1. ADVANCED DENTISTRY (SHOW FIRST) ---
  // ==========================================
  {
    id: "clear-aligners",
    category: "dentistry",
    title: "Invisible Clear Aligners",
    tagline: "Discreet & Comfortable 3D Smile Alignment",
    badge: "Modern Orthodontics",
    description: "Custom-designed transparent thermoplastic aligners that gently guide your teeth into optimal alignment. Completely removable for eating, brushing, and special events.",
    benefits: [
      "Virtually invisible with no metallic wires or brackets",
      "Custom 3D computerized treatment roadmap before you begin",
      "Eat your favorite foods without dietary restrictions",
      "Superior comfort and easier oral hygiene maintenance"
    ],
    time: "Consultation + 3D Scan",
    downtime: "None",
    results: "Transformed smile in 6-12 months",
    image: "/images/dental_aligners_1791040893689.jpg",
    concerns: ["Crooked Teeth", "Gaps between teeth", "Crowding", "Overbite / Underbite"]
  },
  {
    id: "dental-implants",
    category: "dentistry",
    title: "Precision Dental Implants",
    tagline: "Permanent, Lifelike Tooth Replacements",
    badge: "Lifelong Stability",
    description: "Medical-grade biocompatible titanium fixtures seamlessly placed into the jawbone, capped with custom high-strength zirconia crowns that look, feel, and function just like natural teeth.",
    benefits: [
      "Permanent solution that prevents adjacent bone loss",
      "Restores 100% full chewing strength and confidence",
      "No need to grind or compromise neighboring healthy teeth",
      "Can last a lifetime with standard oral hygiene"
    ],
    time: "Painless surgical & prosthetic phases",
    downtime: "1-2 days mild recovery",
    results: "Permanent natural tooth replacement",
    image: "/images/dental_implant_1791040880265.jpg",
    concerns: ["Missing Teeth", "Loose Dentures", "Chewing Difficulty", "Gap in Smile"]
  },
  {
    id: "root-canal",
    category: "dentistry",
    title: "Painless Root Canal Therapy",
    tagline: "Save Your Natural Tooth with Rotary Endodontics",
    badge: "Painless Guarantee",
    description: "Modern rotary endodontics and digital apex locators eliminate deep nerve infections in as little as a single visit, alleviating toothache while preserving your natural tooth structure.",
    benefits: [
      "Completely eliminates severe, throbbing dental pain",
      "Saves your natural tooth from extraction",
      "High-precision computerized rotary instrumentation",
      "Finished with a durable, protective ceramic crown"
    ],
    time: "45-60 mins (Single / Two-visit)",
    downtime: "Immediate relief",
    results: "Restores comfortable chewing permanently",
    image: "/images/dental_root_canal_1791040858131.jpg",
    concerns: ["Severe Toothache", "Sensitivity to Hot/Cold", "Pulp Infection", "Dental Trauma"]
  },
  {
    id: "composite-fillings",
    category: "dentistry",
    title: "Aesthetic Composite Fillings",
    tagline: "Invisible Nano-Hybrid Restorations",
    badge: "Seamless Match",
    description: "Tooth-colored nano-composite restorations precisely shade-matched to your natural enamel. Strong, mercury-free, and virtually undetectable.",
    benefits: [
      "Exact color-matching blends seamlessly with teeth",
      "Bonds directly to enamel, preserving maximum tooth tissue",
      "100% mercury-free, safe, and biocompatible",
      "Completed in a single quick, comfortable visit"
    ],
    time: "20-30 mins per tooth",
    downtime: "Zero downtime",
    results: "Immediate restored aesthetics & function",
    image: "/images/dental_filling_1791040845663.jpg",
    concerns: ["Tooth Cavities", "Chipped Edge", "Old Silver Fillings", "Minor Gaps"]
  },

  // ==========================================
  // --- 2. COSMETOLOGY: SKIN & RADIANCE ---
  // ==========================================
  {
    id: "hydrafacial",
    category: "cosmetology",
    title: "Medical Hydrafacial",
    tagline: "Deep Pore Vortex Detox & Dewy Radiance",
    badge: "Most Popular Glow",
    description: "Patented multi-step vortex exfoliation that cleanses, painlessly extracts blackheads, and floods your skin with nourishing hyaluronic acid, peptides, and antioxidants.",
    benefits: [
      "Instantly clears congested pores & blackheads",
      "Infuses concentrated hydration for 72-hour dewy glow",
      "Smooths skin texture with zero pain or irritation",
      "Perfect pre-event or monthly rejuvenation routine"
    ],
    time: "45 mins",
    downtime: "Zero downtime",
    results: "Instant luminous glow",
    image: "/images/cosmetology_hydrafacial_1792117085722.jpg",
    concerns: ["Dullness", "Blackheads", "Large Pores", "Dehydration", "Pre-event Glow"]
  },
  {
    id: "chemical-peel",
    category: "cosmetology",
    title: "Clinical Chemical Peel",
    tagline: "Advanced Dermatological Skin Resurfacing",
    badge: "Pigmentation Solution",
    description: "Medical-grade customized chemical peels (Glycolic, Salicylic, Lactic & TCA blends) designed to gently dissolve dead cellular layers, erase sun damage, and refine acne blemishes.",
    benefits: [
      "Fades stubborn acne spots, hyperpigmentation & melasma",
      "Stimulates healthy epidermal turnover",
      "Shrinks pore diameter and controls excess sebum",
      "Improves fine lines and skin luminosity"
    ],
    time: "30 mins",
    downtime: "Mild peeling (2-3 days)",
    results: "Visible clarity in 5-7 days",
    image: "/images/chemical_peel_treatment_1792118334881.jpg",
    concerns: ["Acne Marks", "Melasma", "Uneven Tone", "Sun Tan", "Rough Texture"]
  },
  {
    id: "iv-glutathione",
    category: "cosmetology",
    title: "Intravenous (IV) Glutathione",
    tagline: "Cellular Detox & Whole-Body Skin Brightening",
    badge: "Signature Brightening",
    description: "Direct intravenous infusion of high-purity glutathione combined with Vitamin C. Known as the body's 'Master Antioxidant', it suppresses dark eumelanin synthesis for even, radiant skin.",
    benefits: [
      "Promotes full-body skin glow and brighter complexion",
      "Potent detoxifier neutralizing free radicals & oxidative stress",
      "Boosts collagen synthesis & immune resilience",
      "100% bio-available delivery directly into circulation"
    ],
    time: "40 mins",
    downtime: "Zero downtime",
    results: "Cumulative radiance over 3-6 sessions",
    image: "/images/iv_glutathione_drip_1792118370021.jpg",
    concerns: ["Dull Complexion", "Full Body Brightening", "Oxidative Stress", "Toxin Buildup"]
  },
  {
    id: "microneedling",
    category: "cosmetology",
    title: "Collagen Induction Microneedling",
    tagline: "Micro-Channeling for Scar Repair & Texture Renewal",
    badge: "Texture Transformation",
    description: "High-precision medical automated microneedles create thousands of micro-channels in the dermis, triggering natural collagen, elastin synthesis, and rapid cellular repair.",
    benefits: [
      "Significantly softens pitted acne scars and surgical marks",
      "Tightens dilated pores and tightens skin texture",
      "Enhances deep absorption of medical serums by 300%",
      "Softens fine lines around eyes and mouth"
    ],
    time: "45 mins",
    downtime: "Mild redness (12-24 hours)",
    results: "Progressive skin remodeling over 4 weeks",
    image: "/images/cosmetology_skin_glow_1792117146525.jpg",
    concerns: ["Acne Scars", "Open Pores", "Textural Roughness", "Fine Lines"]
  },
  {
    id: "mesotherapy",
    category: "cosmetology",
    title: "Mesotherapy Skin Infusion",
    tagline: "Vitamin & Hyaluronic Acid Micro-Cocktails",
    badge: "Deep Hydration",
    description: "Targeted intradermal micro-droplet delivery of pure hyaluronic acid, amino acids, multi-vitamins, and minerals directly into the dermis to restore youthful dewiness.",
    benefits: [
      "Quenches severely dehydrated and tired skin",
      "Provides natural, healthy glass-skin sheen",
      "Restores dermal elasticity and micro-circulation",
      "Gentle treatment with zero surgical recovery"
    ],
    time: "35 mins",
    downtime: "Minimal (a few hours)",
    results: "Plump, revitalized skin in 48 hours",
    image: "/images/mesotherapy_skin_infusion_1792118582049.jpg",
    concerns: ["Dry Skin", "Loss of Elasticity", "Tired Looking Face", "Urban Pollution"]
  },
  {
    id: "face-prp",
    category: "cosmetology",
    title: "Facial PRP (Vampire Rejuvenation)",
    tagline: "Autologous Platelet Bio-Cellular Regeneration",
    badge: "Natural Bio-Revival",
    description: "Platelet-Rich Plasma extracted from your own blood, concentrated with powerful healing growth factors and gently infused into the skin to awaken dormant stem cells.",
    benefits: [
      "100% natural, bio-identical therapy with zero allergy risk",
      "Rebuilds collagen architecture from within",
      "Diminishes dark under-eye circles and hollows",
      "Restores firmness, elasticity, and youthful radiance"
    ],
    time: "50 mins",
    downtime: "Mild pinkness for 24 hours",
    results: "Peak youthfulness in 2-3 weeks",
    image: "/images/face_prp_rejuvenation_1792118619105.jpg",
    concerns: ["Under-Eye Dark Circles", "Fine Wrinkles", "Skin Laxity", "Sun Damaged Skin"]
  },

  // ===================================================
  // --- 3. COSMETOLOGY: FACIAL SCULPTING & CONTOURING ---
  // ===================================================
  {
    id: "jawline-shaping",
    category: "contouring",
    title: "Jawline Shaping & Facial Contouring",
    tagline: "Sculpted Mandibular Definition & Symmetry",
    badge: "Doctor Specialty",
    description: "Combining Dr. Kaviya's dental craniofacial anatomical expertise with advanced aesthetic filler vectors to sculpt an elegant, sharp, and symmetrically defined jawline and chin profile.",
    benefits: [
      "Sharpens blunt or weak chin profiles",
      "Defines the jaw angle from neck and jowls",
      "Balances facial proportions and profile projection",
      "Non-surgical with instant, natural-looking results"
    ],
    time: "30-45 mins",
    downtime: "None to mild swelling (1-2 days)",
    results: "Immediate structural definition",
    image: "/images/cosmetology_contouring_1792117106240.jpg",
    concerns: ["Weak Jawline", "Facial Asymmetry", "Sagging Jowls", "Receding Chin"]
  },
  {
    id: "botox",
    category: "contouring",
    title: "Botox (Face Slimming & Anti-Aging)",
    tagline: "Masseter Slimming & Dynamic Wrinkle Relaxation",
    badge: "V-Line & Youth",
    description: "Targeted neuromodulator micro-dosing. Relaxes masseter muscles to slim the lower face from square to elegant V-shape, while effortlessly smoothing forehead furrows, frown lines, and crow's feet.",
    benefits: [
      "Masseter reduction slims wide, square lower face",
      "Relieves teeth clenching & jaw tension (Bruxism)",
      "Erases forehead wrinkles, frown lines & crow's feet",
      "Maintains completely natural facial expressions"
    ],
    time: "20 mins",
    downtime: "Zero downtime",
    results: "Wrinkle relief in 3-5 days; slimming in 2-4 weeks",
    image: "/images/botox_masseter_slimming_1792118393280.jpg",
    concerns: ["Square Jaw", "Teeth Grinding", "Forehead Lines", "Crow's Feet", "Frown Lines"]
  },
  {
    id: "fillers",
    category: "contouring",
    title: "Hyaluronic Dermal Fillers",
    tagline: "Skin Volumizing, Lip & Cheek Sculpting",
    badge: "Instant Volume",
    description: "Medical-grade cross-linked hyaluronic acid gels that restore lost youthful fat pads, plump dehydrated lips, lift drooping cheekbones, and soften deep smile folds.",
    benefits: [
      "Replenishes hollow tear troughs (under-eye tiredness)",
      "Restores high cheekbone volume and mid-face lift",
      "Hydrates and shapes natural, well-proportioned lips",
      "Smooths nasolabial folds and marionette lines"
    ],
    time: "30-45 mins",
    downtime: "Zero to minimal tenderness",
    results: "Instant visible rejuvenation, lasts 9-18 months",
    image: "/images/dermal_fillers_lip_cheek_1792118416963.jpg",
    concerns: ["Hollow Under-Eyes", "Thin Lips", "Sunken Cheeks", "Deep Smile Lines"]
  },
  {
    id: "fat-reduction",
    category: "contouring",
    title: "Skin Fat Cell Decreasing (Lipolysis)",
    tagline: "Targeted Double Chin & Facial Fat Dissolving",
    badge: "Non-Surgical Slimming",
    description: "Deoxycholic acid lipolytic micro-injections specifically formulated to permanently dissolve targeted stubborn fat pockets beneath the chin and along lower cheek contours.",
    benefits: [
      "Destroys localized submental fat cells permanently",
      "Eliminates resistant double chin without liposuction",
      "Enhances side profile and neck-jaw separation",
      "Progressive slimming over consecutive weeks"
    ],
    time: "25 mins",
    downtime: "Mild swelling (2-4 days)",
    results: "Permanent fat clearance visible in 3-4 weeks",
    image: "/images/fat_cell_reduction_chin_1792118452560.jpg",
    concerns: ["Double Chin", "Heavy Jowls", "Lower Face Fullness", "Stubborn Submental Fat"]
  },
  {
    id: "pdo-threads",
    category: "contouring",
    title: "PDO Threads (Skin Tightening & Lift)",
    tagline: "Vector Collagen Suspension & Tissue Elevation",
    badge: "Non-Surgical Facelift",
    description: "Biocompatible, absorbable Polydioxanone (PDO) barbed and mono threads placed subtly beneath the skin to instantly lift sagging tissues and create a dense new collagen matrix.",
    benefits: [
      "Instantly lifts mild to moderate mid-face and jaw sagging",
      "Stimulates neocollagenesis for continuous firming",
      "Sharpening vectors recreate the youthful V-contour",
      "Naturally dissolves in 6-8 months, leaving lasting collagen scaffolding"
    ],
    time: "45 mins",
    downtime: "Minimal bruising / tenderness (2-3 days)",
    results: "Immediate lift + tightening improves over 3 months",
    image: "/images/pdo_threads_lifting_1792118488131.jpg",
    concerns: ["Mild Sagging", "Loss of Firmness", "Jowl Droop", "Cheek Laxity"]
  },

  // ==========================================
  // --- 4. COSMETOLOGY: HAIR & TRICHOLOGY ---
  // ==========================================
  {
    id: "gfc-hair",
    category: "hair",
    title: "Hair Growth & Strengthening (GFC, PRP & Stem Cell)",
    tagline: "Triple-Synergy Follicular Regeneration & Density",
    badge: "Advanced Trichology",
    description: "A comprehensive bio-cellular hair restoration protocol combining autologous Growth Factor Concentrate (GFC), high-density PRP, and stem cell exosome triggers to halt shedding, awaken miniaturized follicles, and revive thick, resilient hair.",
    benefits: [
      "Significantly halts excessive hair loss & shedding",
      "Awakens dormant follicles to stimulate new hair shafts",
      "Increases hair caliber and root anchoring strength",
      "Pure, acellular growth factor concentrate with virtually no pain"
    ],
    time: "45 mins",
    downtime: "Zero downtime",
    results: "Noticeable reduction in hair fall within 3-4 weeks",
    image: "/images/cosmetology_hair_therapy_1792117127106.jpg",
    concerns: ["Hair Thinning", "Early Balding", "Post-COVID Hair Loss", "Weak Hair Roots", "Receding Hairline"]
  }
];

export const CONSULTATION_QUESTIONS = [
  {
    id: "discipline",
    title: "What is your primary treatment interest?",
    subtitle: "Select the area you wish to enhance or treat:",
    options: [
      { id: "dental-smile", label: "Dentistry & Smile Enhancement", icon: "🦷", desc: "Aligners, implants, root canals, pain-free fillings" },
      { id: "skin-face", label: "Skin Radiance & Facial Aesthetics", icon: "✨", desc: "Glowing skin, anti-aging, acne marks & peels" },
      { id: "jaw-contour", label: "Jawline Shaping & Facial Slimming", icon: "💎", desc: "Double chin reduction, Botox slimming, sharp jawline" },
      { id: "hair-tricho", label: "Hair Restoration & Density", icon: "🌿", desc: "Hair thinning, excessive shedding, GFC & PRP therapy" }
    ]
  },
  {
    id: "concern",
    title: "What is your main concern or goal?",
    subtitle: "Tell us what you would like Dr. Kaviya to address:",
    dependsOn: "discipline",
    optionsMap: {
      "dental-smile": [
        { id: "crooked-teeth", label: "Crooked or Spaced Teeth", recommended: "clear-aligners", alt: "composite-fillings" },
        { id: "missing-tooth", label: "Missing Tooth or Gaps", recommended: "dental-implants", alt: "clear-aligners" },
        { id: "tooth-pain", label: "Severe Pain or Deep Sensitivity", recommended: "root-canal", alt: "composite-fillings" },
        { id: "cavity-chip", label: "Cavity, Chip or Discoloration", recommended: "composite-fillings", alt: "clear-aligners" }
      ],
      "skin-face": [
        { id: "dull-pigment", label: "Dull Skin & Hyperpigmentation", recommended: "hydrafacial", alt: "chemical-peel" },
        { id: "acne-pores", label: "Open Pores & Acne Scars", recommended: "microneedling", alt: "chemical-peel" },
        { id: "aging-dehydration", label: "Fine Lines & Dehydrated Skin", recommended: "mesotherapy", alt: "face-prp" },
        { id: "fullbody-glow", label: "Whole Body Radiance & Detox", recommended: "iv-glutathione", alt: "hydrafacial" }
      ],
      "jaw-contour": [
        { id: "double-chin", label: "Double Chin & Submental Fat", recommended: "fat-reduction", alt: "jawline-shaping" },
        { id: "masseter-square", label: "Wide Square Jaw / Face Slimming", recommended: "botox", alt: "jawline-shaping" },
        { id: "weak-chin", label: "Undefined Jawline / Profile Balance", recommended: "jawline-shaping", alt: "fillers" },
        { id: "sagging-jowls", label: "Mid-Face Sagging & Tissue Laxity", recommended: "pdo-threads", alt: "fillers" }
      ],
      "hair-tricho": [
        { id: "excess-shedding", label: "Heavy Hair Fall & Shedding", recommended: "gfc-hair", alt: "iv-glutathione" },
        { id: "thin-density", label: "Crown Thinning & Widening Part", recommended: "gfc-hair", alt: "iv-glutathione" },
        { id: "receding-stubborn", label: "Receding Hairline & Miniaturized Roots", recommended: "gfc-hair", alt: "mesotherapy" }
      ]
    }
  }
];
