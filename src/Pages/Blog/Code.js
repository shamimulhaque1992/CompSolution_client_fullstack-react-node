import React from 'react';

const Code = () => {
    return (
        <div>
            <div class="mockup-code">
                <pre data-prefix="$">
                    <code>Code for finding product by name from an Array</code>
                </pre>
                <pre data-prefix=">" class="text-warning">
                    <code>const products = [</code>
                </pre>

                <pre data-prefix=">" class="text-success">
                    <code>  &#123;</code>
                </pre>
                <pre data-prefix=">" class="text-success">
                    <code>      name: "Block Cord End Wire Connector",</code>
                </pre>
                <pre data-prefix=">" class="text-success">
                    <code>      description: "Block-Cord Terminal Insulated-Ferrules
                        End-Wire-Connector Electrical-Crimp-Terminator
                        Tubular-AWG E0508.",
                    </code>
                </pre>
                <pre data-prefix=">" class="text-success">
                    <code>      price: "4.75",
                    </code>
                </pre>
                <pre data-prefix=">" class="text-success">
                    <code>  },
                    </code>
                </pre>

                <pre data-prefix=">" class="text-success">
                    <code>  &#123;</code>
                </pre>
                <pre data-prefix=">" class="text-success">
                    <code>      name: "TDA7294 ZIP-15",</code>
                </pre>
                <pre data-prefix=">" class="text-success">
                    <code>      description: "Audio Amplifier IC ST ZIP-15 TDA7294 TDA7294V Instrument Parts Accessories TDA7294.",
                    </code>
                </pre>
                <pre data-prefix=">" class="text-success">
                    <code>      price: "3.44",
                    </code>
                </pre>
                <pre data-prefix=">" class="text-success">
                    <code>  },
                    </code>
                </pre>

                <pre data-prefix=">" class="text-success">
                    <code>  &#123;</code>
                </pre>
                <pre data-prefix=">" class="text-success">
                    <code>      name: "RV09 10K Potentiometer",</code>
                </pre>
                <pre data-prefix=">" class="text-success">
                    <code>      description: "Blue Color Thermal Insulated female crimp, model  FDD2-250.",
                    </code>
                </pre>
                <pre data-prefix=">" class="text-success">
                    <code>      price: "1.81",
                    </code>
                </pre>
                <pre data-prefix=">" class="text-success">
                    <code>  },
                    </code>
                </pre>

                <pre data-prefix=">" class="text-success">
                    <code>  &#123;</code>
                </pre>
                <pre data-prefix=">" class="text-success">
                    <code>      name: "Stainless steel Wire Feed Gear",</code>
                </pre>
                <pre data-prefix=">" class="text-success">
                    <code>      description: "Outside Diameter:12mm, Hole:5mm, 40 Tooth MK7/MK8 Stainless steel Wire Feed Gear for 3D Printer/Extruder",
                    </code>
                </pre>
                <pre data-prefix=">" class="text-success">
                    <code>      price: "2.39",
                    </code>
                </pre>
                <pre data-prefix=">" class="text-success">
                    <code>  &#125;
                    </code>
                </pre>

                <pre data-prefix=">" class="text-success">
                    <code>&#93;
                    </code>
                </pre>

                <br />

                <pre data-prefix=">" class="text-success">
                    <code>function available(product) &#123;
                    </code>
                </pre>

                <pre data-prefix=">" class="text-success">
                    <code>  return product.name === "Blue female crimp FDD2-250";
                    </code>
                </pre>

                <pre data-prefix=">" class="text-success">
                    <code>&#125;
                    </code>
                </pre>

                <br />

                <pre data-prefix=">" class="text-success">
                    <code>console.log(products.find(available));
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default Code;