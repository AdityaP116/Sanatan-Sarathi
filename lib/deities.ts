export interface Mantra {
  sanskrit: string
  transliteration: string
}

export interface Deity {
  slug: string
  name: string
  title: string
  shortDescription: string
  overview: string
  story: string
  attributes: string[]
  vahana: {
    name: string
    significance: string
  }
  festivals: string[]
  mantra: Mantra
  image: string
  featured: boolean
}

export const deities: Deity[] = [
  {
    slug: "shiva",
    name: "Lord Shiva",
    title: "The Transformer, Lord of Destruction and Renewal",
    shortDescription:
      "The auspicious one who destroys to create anew, the great ascetic and lord of meditation.",
    overview:
      "Lord Shiva is one of the principal deities of Hinduism and a member of the holy trinity (Trimurti), responsible for the dissolution and regeneration of the universe. He embodies both the fierce ascetic and the loving householder, representing the eternal cycle of destruction and renewal.",
    story:
      "Shiva resides atop Mount Kailash in deep meditation, his matted locks holding the sacred river Ganga and a crescent moon. The serpent Vasuki coils around his neck, and his throat is blue from drinking the poison Halahala to save the universe during the churning of the cosmic ocean. As Nataraja, he performs the Tandava, the cosmic dance that sustains the rhythm of creation and dissolution. His consort is Goddess Parvati, and together they represent the perfect union of consciousness and energy. Shiva is revered as the destroyer of ego and ignorance, guiding devotees toward liberation (moksha).",
    attributes: ["Trishula", "Damaru", "Crescent Moon", "Third Eye", "Rudraksha", "Sacred Ash"],
    vahana: {
      name: "Nandi",
      significance:
        "The sacred bull Nandi represents strength, steadfast devotion, and righteousness. He is Shiva's faithful mount and gatekeeper, symbolizing the disciplined mind that carries the soul toward the divine.",
    },
    festivals: ["Maha Shivaratri", "Sawan (Shravan Month)", "Pradosham"],
    mantra: {
      sanskrit: "ॐ नमः शिवाय",
      transliteration: "Om Namah Shivaya",
    },
    image: "/deities/shiva.png",
    featured: true,
  },
  {
    slug: "vishnu",
    name: "Lord Vishnu",
    title: "The Preserver, Sustainer of the Universe",
    shortDescription:
      "The compassionate protector who preserves cosmic order and descends as avatars to restore righteousness.",
    overview:
      "Lord Vishnu is the preserver and protector within the holy trinity. He maintains the balance of the cosmos and intervenes during times of chaos by incarnating in various forms (avatars) to restore dharma, the moral and cosmic order.",
    story:
      "Vishnu reclines upon the cosmic serpent Shesha, floating on the milky ocean of Kshira Sagara, with his consort Goddess Lakshmi at his feet. Whenever evil threatens to overwhelm the world, he descends in one of his ten principal avatars (Dashavatara), including Rama and Krishna. His four arms hold the conch (Shankha) whose sound represents creation, the discus (Sudarshana Chakra) symbolizing the mind, the mace (Gada) representing strength, and the lotus signifying purity and liberation. Vishnu embodies mercy, order, and the unwavering protection of all beings.",
    attributes: ["Sudarshana Chakra", "Shankha (Conch)", "Gada (Mace)", "Lotus", "Kaustubha Gem"],
    vahana: {
      name: "Garuda",
      significance:
        "The mighty eagle Garuda symbolizes courage, speed, and devotion. As the king of birds, he carries Vishnu across the cosmos and represents the soul's swift ascent toward the divine.",
    },
    festivals: ["Vaikuntha Ekadashi", "Anant Chaturdashi", "Tulsi Vivah"],
    mantra: {
      sanskrit: "ॐ नमो नारायणाय",
      transliteration: "Om Namo Narayanaya",
    },
    image: "/deities/vishnu.png",
    featured: true,
  },
  {
    slug: "krishna",
    name: "Lord Krishna",
    title: "The Divine Cowherd, Teacher of the Bhagavad Gita",
    shortDescription:
      "The playful and wise avatar of Vishnu, charioteer of Arjuna and speaker of timeless divine wisdom.",
    overview:
      "Lord Krishna is the eighth avatar of Vishnu and one of the most beloved deities in Hinduism. He is revered as a divine statesman, philosopher, and the embodiment of love and joy. His teachings in the Bhagavad Gita form the spiritual heart of Hindu philosophy.",
    story:
      "Born in Mathura to Devaki and Vasudeva, Krishna was raised by foster parents Yashoda and Nanda in Gokul to escape the tyrant king Kamsa. His childhood is filled with enchanting tales of stealing butter, playing the flute, and dancing with the gopis. As an adult, he became a guide and protector, ultimately serving as the charioteer of Arjuna in the great war of Kurukshetra. On that battlefield, he delivered the Bhagavad Gita, illuminating the paths of duty (dharma), devotion (bhakti), and selfless action. Krishna teaches that the divine resides within all and that righteous action performed without attachment leads to liberation.",
    attributes: ["Flute (Bansuri)", "Peacock Feather", "Sudarshana Chakra", "Butter", "Lotus"],
    vahana: {
      name: "Garuda",
      significance:
        "As an avatar of Vishnu, Krishna shares Garuda, the divine eagle, representing the swift and fearless movement of the soul guided by wisdom and devotion.",
    },
    festivals: ["Janmashtami", "Holi", "Govardhan Puja"],
    mantra: {
      sanskrit: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
      transliteration: "Hare Krishna Hare Krishna, Krishna Krishna Hare Hare",
    },
    image: "/deities/krishna.png",
    featured: true,
  },
  {
    slug: "ganesha",
    name: "Lord Ganesha",
    title: "The Remover of Obstacles, Lord of Beginnings",
    shortDescription:
      "The elephant-headed god of wisdom and new beginnings, worshipped first before any auspicious undertaking.",
    overview:
      "Lord Ganesha is the beloved elephant-headed deity revered as the remover of obstacles, the patron of arts and sciences, and the lord of wisdom and intellect. He is traditionally invoked at the start of any new venture, ceremony, or journey.",
    story:
      "Ganesha is the son of Lord Shiva and Goddess Parvati. According to legend, Parvati created him from sandalwood paste to guard her door. When Shiva returned and was denied entry by the boy, a conflict ensued, and Ganesha's head was severed. To console the grieving Parvati, Shiva replaced it with the head of an elephant, granting him new life and the status of first among the gods to be worshipped. His large ears remind devotees to listen more, his small mouth to speak less, and his big belly to digest all of life's experiences with equanimity. The broken tusk symbolizes sacrifice and the writing of the great epic Mahabharata.",
    attributes: ["Modak", "Axe (Parashu)", "Lotus", "Broken Tusk", "Noose (Pasha)"],
    vahana: {
      name: "Mooshika (Mouse)",
      significance:
        "The humble mouse represents the ability to overcome obstacles of any size and the conquering of desire and ego. Despite its small form, it carries the great lord, teaching that wisdom tames even the restless mind.",
    },
    festivals: ["Ganesh Chaturthi", "Sankashti Chaturthi", "Vinayaka Chaturthi"],
    mantra: {
      sanskrit: "ॐ गं गणपतये नमः",
      transliteration: "Om Gam Ganapataye Namaha",
    },
    image: "/deities/ganesha.png",
    featured: true,
  },
  {
    slug: "hanuman",
    name: "Lord Hanuman",
    title: "The Devoted One, Embodiment of Strength and Service",
    shortDescription:
      "The mighty devotee of Lord Rama, symbol of unwavering devotion, courage, and selfless service.",
    overview:
      "Lord Hanuman is the divine vanara (monkey) deity celebrated for his immense strength, boundless devotion to Lord Rama, and selfless service. He embodies the ideal of bhakti (devotion) and is worshipped for courage, protection, and the removal of fear.",
    story:
      "Hanuman is the son of the wind god Vayu and is blessed with extraordinary powers. In the epic Ramayana, he plays a pivotal role in rescuing Sita from the demon king Ravana. He leaps across the ocean to Lanka, locates Sita, and later carries an entire mountain bearing the life-saving Sanjeevani herb to heal Lakshmana. His heart is said to bear the image of Rama and Sita, representing pure, egoless devotion. Hanuman is also a symbol of humility despite great power, and he is regarded as a chiranjivi, one who is immortal and remains present wherever the name of Rama is sung.",
    attributes: ["Gada (Mace)", "Sanjeevani Mountain", "Saffron Robe", "Immense Strength"],
    vahana: {
      name: "None (Self-propelled)",
      significance:
        "Hanuman requires no mount, for he is the son of the wind and can fly across oceans and mountains by his own divine power, symbolizing self-reliance fueled by devotion.",
    },
    festivals: ["Hanuman Jayanti", "Diwali", "Ram Navami"],
    mantra: {
      sanskrit: "ॐ हं हनुमते नमः",
      transliteration: "Om Ham Hanumate Namaha",
    },
    image: "/deities/hanuman.png",
    featured: true,
  },
  {
    slug: "lakshmi",
    name: "Goddess Lakshmi",
    title: "The Goddess of Wealth, Fortune, and Prosperity",
    shortDescription:
      "The radiant goddess of wealth, abundance, and grace, consort of Lord Vishnu.",
    overview:
      "Goddess Lakshmi is the deity of wealth, fortune, prosperity, and beauty, both material and spiritual. As the consort of Lord Vishnu, she represents the nurturing, abundant aspect of the divine and is worshipped for grace, well-being, and inner richness.",
    story:
      "Lakshmi emerged radiantly from the churning of the cosmic ocean (Samudra Manthan), seated upon a fully bloomed lotus, and chose Vishnu as her eternal companion. She is depicted with four arms representing the four goals of human life: righteousness (dharma), prosperity (artha), desire (kama), and liberation (moksha). Golden coins flow from her hands, and elephants often shower her with sacred waters, symbolizing royal authority and fertility. True devotees understand that the wealth Lakshmi bestows is not merely material but the inner abundance of virtue, contentment, and devotion. She is especially honored during Diwali, when homes are cleaned and lamps are lit to welcome her blessings.",
    attributes: ["Lotus", "Gold Coins", "Pot of Abundance", "Four Arms"],
    vahana: {
      name: "Owl (Ulooka)",
      significance:
        "The owl, able to see in darkness, reminds devotees to seek the light of wisdom and to use prosperity with discernment rather than being blinded by it.",
    },
    festivals: ["Diwali", "Lakshmi Puja", "Varalakshmi Vratam"],
    mantra: {
      sanskrit: "ॐ श्रीं महालक्ष्म्यै नमः",
      transliteration: "Om Shreem Mahalakshmyai Namaha",
    },
    image: "/deities/lakshmi.png",
    featured: false,
  },
  {
    slug: "saraswati",
    name: "Goddess Saraswati",
    title: "The Goddess of Knowledge, Music, and Arts",
    shortDescription:
      "The serene goddess of wisdom, learning, music, and the creative arts, dressed in pure white.",
    overview:
      "Goddess Saraswati is the deity of knowledge, wisdom, music, art, speech, and learning. She represents the free flow of consciousness and is revered by students, scholars, artists, and seekers of truth.",
    story:
      "Saraswati is depicted dressed in spotless white, symbolizing purity and the illumination of true knowledge. She is seated upon a white lotus and plays the veena, a stringed instrument representing the harmony of the arts and sciences. In her hands she also holds the sacred Vedas and a string of prayer beads, signifying spiritual knowledge and the discipline of meditation. As the consort of Lord Brahma, the creator, she provides the wisdom necessary for creation itself. Saraswati teaches that true knowledge dispels ignorance and that learning, when pursued with humility, leads the soul toward enlightenment. She is especially honored during Vasant Panchami, when children are introduced to letters and learning.",
    attributes: ["Veena", "Sacred Vedas", "White Lotus", "Prayer Beads (Mala)"],
    vahana: {
      name: "Swan (Hamsa)",
      significance:
        "The graceful swan is said to separate milk from water, symbolizing the discernment to distinguish the eternal truth from the temporary, and pure knowledge from illusion.",
    },
    festivals: ["Vasant Panchami", "Saraswati Puja", "Navaratri"],
    mantra: {
      sanskrit: "ॐ ऐं सरस्वत्यै नमः",
      transliteration: "Om Aim Saraswatyai Namaha",
    },
    image: "/deities/saraswati.png",
    featured: false,
  },
  {
    slug: "durga",
    name: "Goddess Durga",
    title: "The Invincible Mother, Protector of the Righteous",
    shortDescription:
      "The fierce and protective mother goddess who vanquishes evil and safeguards the cosmic order.",
    overview:
      "Goddess Durga is the supreme warrior form of the divine feminine (Shakti), embodying strength, protection, and motherly compassion. She is worshipped as the invincible force that destroys evil and restores balance to the universe.",
    story:
      "When the buffalo demon Mahishasura, blessed with the boon that no man or god could slay him, terrorized the heavens, the gods combined their divine energies to create Durga. Riding a lion and wielding the weapons of all the gods in her many arms, she battled Mahishasura for nine days and nights, finally vanquishing him on the tenth day, celebrated as Vijayadashami. Her multiple arms hold the trident of Shiva, the discus of Vishnu, the conch, the bow, and other divine weapons, each representing a power summoned to protect dharma. Durga is the embodiment of fearless, protective motherhood, reminding devotees that the divine feminine is both nurturing and a formidable defender against injustice.",
    attributes: ["Trishula (Trident)", "Sudarshana Chakra", "Sword", "Conch", "Bow and Arrow"],
    vahana: {
      name: "Lion",
      significance:
        "The majestic lion represents raw power, courage, and determination harnessed under divine will. Durga's calm seat upon the fierce lion shows mastery over untamed strength.",
    },
    festivals: ["Navaratri", "Durga Puja", "Vijayadashami (Dussehra)"],
    mantra: {
      sanskrit: "ॐ दुं दुर्गायै नमः",
      transliteration: "Om Dum Durgayai Namaha",
    },
    image: "/deities/durga.png",
    featured: false,
  },
  {
    slug: "kali",
    name: "Goddess Kali",
    title: "The Fierce Mother, Destroyer of Evil and Ego",
    shortDescription:
      "The powerful goddess of time and transformation who annihilates evil and liberates the soul.",
    overview:
      "Goddess Kali is the fierce and powerful form of the Mother Goddess, representing time, change, and the destruction of evil and ego. Though her appearance is fearsome, she is a deeply compassionate mother who liberates her devotees from fear and bondage.",
    story:
      "Kali is said to have emerged from the brow of Goddess Durga during a fierce battle against demons. In her most famous legend, she defeats the demon Raktabija, whose every drop of spilled blood gave rise to a new clone; Kali drank his blood before it touched the ground, ending the threat. Lost in the intensity of battle, she danced upon the battlefield until Lord Shiva lay beneath her feet to calm her, the moment captured in her iconic image with her tongue extended. Her dark complexion represents the boundless, formless nature of the absolute. Kali teaches that to attain liberation, one must let the ego and all illusions be destroyed. She is the tender mother who frees the soul from the fear of death itself.",
    attributes: ["Sword", "Garland of Skulls", "Severed Head", "Blessing Hand (Abhaya)"],
    vahana: {
      name: "None / Shiva as her base",
      significance:
        "Kali is often depicted standing upon Lord Shiva, symbolizing that dynamic energy (Shakti) operates upon the still ground of pure consciousness, a reminder of the union of power and serenity.",
    },
    festivals: ["Kali Puja", "Navaratri", "Diwali"],
    mantra: {
      sanskrit: "ॐ क्रीं कालिकायै नमः",
      transliteration: "Om Kreem Kalikayai Namaha",
    },
    image: "/deities/kali.png",
    featured: false,
  },
  {
    slug: "kartikeya",
    name: "Lord Kartikeya",
    title: "The Commander of the Divine Army, God of Valor",
    shortDescription:
      "The youthful warrior god, son of Shiva, leader of the celestial armies and bestower of wisdom.",
    overview:
      "Lord Kartikeya, also known as Murugan, Skanda, or Subramanya, is the god of war and victory and the commander-in-chief of the divine armies. He represents valor, discipline, and the triumph of wisdom over ignorance.",
    story:
      "Kartikeya is the son of Lord Shiva and Goddess Parvati, born to vanquish the demon Tarakasura, who could only be defeated by Shiva's offspring. Raised by the six Krittika star mothers, he is sometimes depicted with six faces. As a youthful and radiant warrior, he led the celestial armies to victory, wielding his divine spear, the Vel, gifted by his mother, which represents the sharp, penetrating power of spiritual discernment. Especially revered in South India as Murugan, he is also honored as a teacher of profound wisdom, having once explained the meaning of the sacred syllable Om to his own father. Kartikeya embodies the courage to confront one's inner demons and the discipline required on the spiritual path.",
    attributes: ["Vel (Divine Spear)", "Six Faces", "Bow and Arrow", "Banner of the Rooster"],
    vahana: {
      name: "Peacock (Paravani)",
      significance:
        "The magnificent peacock represents the conquest of vanity and ego. By riding the proud bird, Kartikeya shows mastery over pride, while its beauty signifies the splendor of spiritual victory.",
    },
    festivals: ["Thaipusam", "Skanda Shashti", "Vaikasi Visakam"],
    mantra: {
      sanskrit: "ॐ शरवणभव",
      transliteration: "Om Saravana Bhava",
    },
    image: "/deities/kartikeya.png",
    featured: false,
  },
]

export function getDeityBySlug(slug: string): Deity | undefined {
  return deities.find((d) => d.slug === slug)
}

export function getFeaturedDeities(): Deity[] {
  return deities.filter((d) => d.featured)
}

export function searchDeities(query: string): Deity[] {
  const q = query.trim().toLowerCase()
  if (!q) return deities
  return deities.filter((d) => {
    return (
      d.name.toLowerCase().includes(q) ||
      d.title.toLowerCase().includes(q) ||
      d.shortDescription.toLowerCase().includes(q) ||
      d.attributes.some((a) => a.toLowerCase().includes(q)) ||
      d.festivals.some((f) => f.toLowerCase().includes(q)) ||
      d.vahana.name.toLowerCase().includes(q)
    )
  })
}

export const dailyWisdomQuotes = [
  {
    text: "Whenever righteousness declines and unrighteousness rises, I manifest myself.",
    source: "Bhagavad Gita 4.7",
  },
  {
    text: "You have the right to perform your actions, but you are not entitled to the fruits of those actions.",
    source: "Bhagavad Gita 2.47",
  },
  {
    text: "The soul is neither born, nor does it ever die; it is eternal, everlasting, and primeval.",
    source: "Bhagavad Gita 2.20",
  },
  {
    text: "A person can rise through the efforts of their own mind; for the mind is the friend of the self.",
    source: "Bhagavad Gita 6.5",
  },
  {
    text: "Set thy heart upon thy work, but never on its reward.",
    source: "Bhagavad Gita 2.47",
  },
]
