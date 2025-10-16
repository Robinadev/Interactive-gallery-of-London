class GeminiAIModal {
    constructor() {
        this.modal = document.getElementById('aiModal');
        this.aiResponse = document.getElementById('ai-response');
        this.queryAttraction = document.getElementById('query-attraction');
        this.aiInput = document.getElementById('ai-input');
        this.sendButton = document.getElementById('send-button');
        this.attractionsData = this.initializeAIData();
        this.currentAttraction = null;
        this.init();
    }

    init() {
        // Add click event to attraction cards
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.attraction-card');
            if (card) {
                const attractionId = card.dataset.attraction;
                this.openAIModal(attractionId);
            }
        });

        // Close modal events
        document.querySelector('.close-modal').addEventListener('click', () => {
            this.closeModal();
        });

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });

        // Send message functionality
        this.sendButton.addEventListener('click', () => {
            this.sendUserMessage();
        });

        this.aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendUserMessage();
            }
        });

        // Suggested questions
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('question-chip')) {
                this.handleSuggestedQuestion(e.target.dataset.question);
            }
        });
    }

    initializeAIData() {
        return {
            'tower-bridge': {
                name: 'Tower Bridge',
                baseDescription: `Tower Bridge is a magnificent Victorian-era combined bascule and suspension bridge spanning the River Thames in London. Built between 1886 and 1894, this iconic structure stands as both a functional river crossing and an architectural masterpiece that has become synonymous with London's skyline.`,
                responses: {
                    history: `**Historical Background:**
                    
Tower Bridge was constructed to address the need for a new river crossing downstream of London Bridge while maintaining river access to the Pool of London. The design competition attracted over 50 entries, with architect Horace Jones and engineer John Wolfe Barry's collaborative design ultimately selected.

**Construction Timeline:**
• **1886:** Construction begins with the laying of foundation stones
• **1887:** Massive concrete piers sunk into riverbed
• **1892:** Tower structures completed
• **1894:** Bridge officially opens to public

The bridge represented cutting-edge Victorian engineering, combining traditional suspension principles with innovative bascule mechanisms that allowed the central span to lift for passing ships.`,

                    architecture: `**Architectural Marvel:**

Tower Bridge showcases a distinctive Victorian Gothic style, chosen specifically to complement the nearby Tower of London. The bridge's design incorporates several innovative engineering solutions:

**Structural Features:**
• **Total Length:** 800 feet (244 meters)
• **Tower Height:** 213 feet (65 meters) each
• **Bascule Spans:** Two 100-foot leaves that lift to 86 degrees
• **Materials:** Steel framework clad in Cornish granite and Portland stone

**Engineering Innovations:**
The bridge utilizes a unique combination of suspension and bascule mechanisms. The suspension chains help support the approach spans while the central bascules use massive hydraulic systems (originally steam-powered, now electric) to lift within minutes.`,

                    visiting: `**Visitor Experience & Tips:**

**Best Times to Visit:**
• **Early Morning (8-10 AM):** Avoid crowds and capture beautiful lighting
• **Weekdays:** Generally less crowded than weekends
• **Evening:** Spectacular when illuminated against sunset

**Must-See Features:**
1. **Glass Walkway:** High-level walkways with transparent floors offering stunning 42-meter high views
2. **Victorian Engine Rooms:** Original steam engines and hydraulic machinery
3. **Tower Bridge Exhibition:** Interactive displays about bridge history and operation

**Practical Information:**
• **Lift Times:** Check schedule online as lifts occur about 1000 times yearly
• **Photography:** South bank offers best panoramic views
• **Access:** Fully accessible with elevators to walkways`,

                    facts: `**Fascinating Facts:**

🔍 **Little-Known Details:**
• The bridge was originally painted a chocolate brown color
• It took 432 construction workers 8 years to complete
• Each bascule weighs over 1,000 tons
• The high-level walkways were closed from 1910-1982 due to lack of use

🎯 **Modern Operations:**
• The bridge lifts approximately 3 times per day on average
• Advance notice required for vessel passages
• Can be raised within 90 seconds when needed
• Monitored 24/7 by bridge control room

📊 **By the Numbers:**
• 11,000 tons of steel in framework
• 40,000+ daily crossings (vehicles & pedestrians)
• 70,000+ vehicles cross weekly
• 2 million+ visitors annually`
                },
                image: 'https://images.unsplash.com/photo-1549144517-8d43f5b53bf2?auto=format&fit=crop&w=1200&q=80'
            },
            'big-ben': {
                name: 'Big Ben',
                baseDescription: `Big Ben is the beloved nickname for the Great Bell of the clock at the north end of the Palace of Westminster, though commonly refers to the entire clock tower. This iconic London landmark stands as a magnificent example of Victorian Gothic architecture and precision engineering.`,
                responses: {
                    history: `**Historical Journey:**

The clock tower we know today was built as part of Charles Barry's design for the new Palace of Westminster after the 1834 fire destroyed much of the original complex. Construction took place between 1843 and 1859 under the supervision of architect Augustus Pugin.

**Key Historical Moments:**
• **1856:** The Great Bell cast at Whitechapel Bell Foundry
• **1859:** Clock mechanism becomes operational
• **2012:** Renamed Elizabeth Tower during Diamond Jubilee
• **2017-2022:** Major conservation and restoration project

The tower has survived WWII bombings and continues to serve as both a timekeeper and symbol of British resilience.`,

                    architecture: `**Architectural Excellence:**

Elizabeth Tower exemplifies Victorian Gothic Revival architecture at its finest, standing 316 feet (96 meters) tall with meticulous attention to detail.

**Design Elements:**
• **Height:** 316 feet to tip of spire
• **Materials:** Sand-colored Anston limestone with cast iron spires
• **Clock Faces:** Four 23-foot diameter dials
• **Construction:** Over 5 years using innovative techniques

**Clock Mechanism:**
Designed by Edmund Beckett Denison, the clock features a double three-legged gravity escapement that ensures remarkable accuracy. The mechanism weighs approximately 5 tons and must be wound three times per week.`,

                    visiting: `**Visitor Information:**

**Viewing Tips:**
• **Exterior Views:** Best from Parliament Square, Westminster Bridge, or across the Thames
• **Photography:** Golden hour provides stunning lighting
• **Audio Experience:** Listen for the famous chimes every 15 minutes

**Interesting Facts for Visitors:**
• The clock faces are made of opal glass sections
• A light above the clock shows when Parliament is sitting
• The tower leans slightly northwest by about 230mm
• Special illumination marks significant national events

**Nearby Attractions:**
Combine your visit with Westminster Abbey, Houses of Parliament, and Churchill War Rooms.`,

                    facts: `**Remarkable Facts:**

⏰ **Timekeeping Marvel:**
• Each minute hand is 14 feet long
• The pendulum is 13 feet long with a 2-second period
• Accuracy maintained within 2 seconds per week using old penny coins
• Clock faces were originally lit by gas lamps

🔔 **The Great Bell:**
• Weighs 13.7 tons (13,760 kg)
• First bell cracked during testing in 1857
• Current bell developed a crack in 1859, still in use
• The distinctive "bong" is recognized worldwide

🏛️ **Political Significance:**
• Serves as backdrop for political announcements
• Broadcast globally during New Year celebrations
• Featured in countless films and television shows`
                },
                image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1200&q=80'
            },
            'london-eye': {
                name: 'London Eye',
                baseDescription: `The London Eye, also known as the Millennium Wheel, is a giant cantilevered observation wheel on the South Bank of the River Thames. Standing at 443 feet (135 meters), it offers unparalleled panoramic views of London's skyline and has become one of the city's most popular tourist attractions.`,
                responses: {
                    history: `**Historical Development:**

The London Eye was conceived by architects David Marks and Julia Barfield as a landmark for the new millennium. Despite initial planning challenges and technical issues, it has become an enduring symbol of modern London.

**Construction Timeline:**
• **1998:** Design approved after multiple revisions
• **1999:** Structure assembled horizontally over the Thames
• **2000:** Official opening after technical delays
• **2006:** Ownership transferred to Merlin Entertainments

Originally intended as a temporary five-year installation, its overwhelming popularity led to permanent status.`,

                    architecture: `**Engineering Marvel:**

The London Eye represents a masterpiece of modern engineering, being the world's tallest cantilevered observation wheel until 2006.

**Technical Specifications:**
• **Height:** 443 feet (135 meters)
• **Weight:** 2,100 tons of steel
• **Capsules:** 32 sealed, climate-controlled pods
• **Rotation Speed:** 0.6 mph (0.9 km/h) - 30 minutes per revolution

**Design Innovations:**
The wheel uses a unique "A-frame" support system with spokes tensioned like a bicycle wheel. The capsules remain upright through a sophisticated gravity-based system rather than mechanical leveling.`,

                    visiting: `**Visitor Experience:**

**Best Visiting Times:**
• **Sunset:** Spectacular transition from day to night views
• **Weekday Mornings:** Shortest queue times
• **Clear Days:** Visibility up to 25 miles

**Ticket Options:**
• Standard experience with 30-minute rotation
• Champagne experience with premium service
• Private capsule bookings for special occasions
• Fast track tickets to skip queues

**Viewing Highlights:**
Spot landmarks including Buckingham Palace, St Paul's Cathedral, and on clear days, Windsor Castle.`,

                    facts: `**Fascinating Details:**

🎡 **Record-Breaking Features:**
• Was Europe's tallest wheel until 2006
• Carries over 3.75 million visitors annually
• Each capsule represents one of London's boroughs
• The wheel moves slowly enough to board without stopping

💡 **Technical Facts:**
• Construction took 7 days of continuous lifting
• Built in sections that were floated up the Thames
• Uses 64,000 LED lights for nighttime illumination
• Can withstand winds up to 50 mph

🌟 **Cultural Impact:**
• Featured in numerous films and TV shows
• Hosts wedding ceremonies and proposals regularly
• Special light displays mark significant events
• Has become as iconic as historic London landmarks`
                },
                image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80'
            },
            'buckingham-palace': {
                name: 'Buckingham Palace',
                baseDescription: `Buckingham Palace serves as the official London residence and administrative headquarters of the monarch of the United Kingdom. Located in the City of Westminster, this magnificent palace is the centerpiece of Britain's constitutional monarchy and a symbol of national identity.`,
                responses: {
                    history: `**Royal History:**

The site has been part of the Crown Estate since 1761 when George III acquired Buckingham House as a private residence for Queen Charlotte. The building we see today evolved through major expansions and renovations over two centuries.

**Historical Timeline:**
• **1703:** Original Buckingham House built for Duke of Buckingham
• **1761:** Purchased by George III as Queen's House
• **1837:** Becomes official monarch residence under Queen Victoria
• **1913:** East front redesigned in neoclassical style

The palace has witnessed countless historical events, from royal weddings to state visits and national celebrations.`,

                    architecture: `**Architectural Grandeur:**

Buckingham Palace showcases a magnificent blend of architectural styles, primarily neoclassical with Victorian and Edwardian influences.

**Palace Structure:**
• **Rooms:** 775 total, including 19 State Rooms, 52 royal bedrooms
• **Floors:** 5 main floors plus basements
• **Facade:** 355-foot wide principal front
• **Materials:** Bath stone with gold detailing

**Notable Features:**
The East Front features the famous balcony used for royal appearances, while the State Rooms display some of the finest examples of English decorative arts.`,

                    visiting: `**Visitor Information:**

**Summer Opening:**
The State Rooms are open to visitors during the annual Summer Opening (typically July-October) when the Royal Family is away.

**Key Attractions:**
• **State Rooms:** Magnificent reception rooms used for official events
• **Royal Mews:** Working stables with royal carriages and coaches
• **Queen's Gallery:** Changing exhibitions from Royal Collection
• **Gardens:** 39-acre private garden with lake

**Changing of the Guard:**
The famous ceremony occurs several times weekly at 11:00 AM, weather permitting.`,

                    facts: `**Royal Facts:**

🏰 **Palace Statistics:**
• 775 rooms, including 78 bathrooms
• 1,514 doors and 760 windows
• 40,000+ light bulbs throughout
• Own police station, post office, and swimming pool

👑 **Royal Operations:**
• 800+ staff members work at the palace
• The Royal Standard flies only when monarch is in residence
• Garden parties host up to 30,000 guests annually
• Contains its own cinema and medical center

🎪 **Historical Tidbits:**
• Bombed 7 times during WWII
• First balcony appearance by Royal Family in 1851
• The balcony was added in 1847
• Contains one of London's largest private gardens`
                },
                image: 'https://images.unsplash.com/photo-1592394675770-79f51af1f8c9?auto=format&fit=crop&w=1200&q=80'
            }
        };
    }

    openAIModal(attractionId) {
        this.currentAttraction = this.attractionsData[attractionId];
        
        if (!this.currentAttraction) {
            console.error('Attraction not found:', attractionId);
            return;
        }

        // Update modal content
        this.queryAttraction.textContent = this.currentAttraction.name;
        
        // Show modal
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Generate initial AI response
        this.generateAIResponse('Tell me about this landmark');
    }

    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.currentAttraction = null;
        this.aiResponse.innerHTML = '';
        this.aiInput.value = '';
    }

    async generateAIResponse(queryType, customQuestion = null) {
        // Show typing animation
        this.showTypingAnimation();

        // Simulate AI processing time
        await this.delay(1500 + Math.random() * 1000);

        let response;
        
        if (customQuestion) {
            response = this.generateCustomResponse(customQuestion);
        } else {
            response = this.currentAttraction.baseDescription + '\n\n' + 
                      this.currentAttraction.responses[queryType];
        }

        this.displayAIResponse(response);
    }

    showTypingAnimation() {
        this.aiResponse.innerHTML = `
            <div class="typing-animation">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
    }

    displayAIResponse(response) {
        this.aiResponse.innerHTML = this.formatResponse(response);
        
        // Add slight delay for reading effect
        setTimeout(() => {
            this.aiResponse.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 100);
    }

    formatResponse(text) {
        // Convert markdown-like formatting to HTML
        return text
            .split('\n\n')
            .map(paragraph => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return `<h4>${paragraph.slice(2, -2)}</h4>`;
                }
                if (paragraph.includes('•')) {
                    const items = paragraph.split('\n•')
                        .filter(item => item.trim())
                        .map(item => `<li>${item.replace('•', '').trim()}</li>`)
                        .join('');
                    return `<ul>${items}</ul>`;
                }
                return `<p>${paragraph}</p>`;
            })
            .join('');
    }

    generateCustomResponse(question) {
        const attraction = this.currentAttraction;
        const responses = {
            'history': attraction.responses.history,
            'architecture': attraction.responses.architecture,
            'visiting': attraction.responses.visiting,
            'facts': attraction.responses.facts
        };

        // Simple keyword matching for demo purposes
        const lowerQuestion = question.toLowerCase();
        
        if (lowerQuestion.includes('history') || lowerQuestion.includes('built')) {
            return responses.history;
        } else if (lowerQuestion.includes('architecture') || lowerQuestion.includes('design')) {
            return responses.architecture;
        } else if (lowerQuestion.includes('visit') || lowerQuestion.includes('time') || lowerQuestion.includes('ticket')) {
            return responses.visiting;
        } else if (lowerQuestion.includes('fact') || lowerQuestion.includes('interesting')) {
            return responses.facts;
        } else {
            // Default comprehensive response
            return `${attraction.baseDescription}

${responses.history.split('\n\n')[0]}

${responses.architecture.split('\n\n')[0]}

${responses.visiting.split('\n\n')[0]}

${responses.facts.split('\n\n')[0]}`;
        }
    }

    handleSuggestedQuestion(questionType) {
        this.generateAIResponse(questionType);
    }

    sendUserMessage() {
        const message = this.aiInput.value.trim();
        if (!message || !this.currentAttraction) return;

        // Clear input
        this.aiInput.value = '';

        // Generate AI response
        this.generateAIResponse('custom', message);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Method to add new attractions
    addAttraction(attractionId, attractionData) {
        this.attractionsData[attractionId] = attractionData;
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    const aiModal = new GeminiAIModal();
    
    // Add some interactive effects
    const cards = document.querySelectorAll('.attraction-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add CSS for typing animation
const style = document.createElement('style');
style.textContent = `
    .typing-animation {
        display: flex;
        gap: 4px;
        padding: 10px 0;
    }
    
    .typing-dot {
        width: 8px;
        height: 8px;
        background: var(--text-secondary);
        border-radius: 50%;
        animation: typingBounce 1.4s infinite;
    }
    
    .typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .typing-dot:nth-child(3) { animation-delay: 0.4s; }
    
    @keyframes typingBounce {
        0%, 60%, 100% { transform: translateY(0); }
        30% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);