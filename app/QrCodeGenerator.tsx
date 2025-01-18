"use client";

import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LayoutGrid } from "lucide-react"; // Icône LayoutGrid

const QrCodeGenerator = () => {
  const [url, setUrl] = useState<string>("");
  const [color, setColor] = useState<string>("#000000");
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [logo, setLogo] = useState<string | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [qrType, setQrType] = useState<"link" | "email">("link");

  // Fonction pour valider les couleurs hexadécimales ou les noms de couleurs
  const isValidColor = (value: string): boolean => {
    const s = new Option().style;
    s.color = value;
    return s.color !== "";
  };

  const handleColorChange = (value: string, setFn: React.Dispatch<React.SetStateAction<string>>) => {
    // Met à jour la valeur uniquement si elle est valide
    if (isValidColor(value)) {
      setFn(value);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-4xl p-8 rounded-lg shadow-xl bg-white bg-opacity-80">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-900">
            QR Code Generator
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Configuration Section */}
            <div className="flex-1 space-y-8">
              <Tabs
                defaultValue="link"
                onValueChange={(val) => setQrType(val as "link" | "email")}
                className="space-y-6"
              >
                <TabsList className="flex justify-center gap-4 bg-white rounded-lg shadow-md p-2">
                  <TabsTrigger
                    value="link"
                    className="text-lg font-medium text-gray-600 py-2 px-6 rounded-md hover:bg-blue-100 transition-all duration-200"
                  >
                    Link
                  </TabsTrigger>
                  <TabsTrigger
                    value="email"
                    className="text-lg font-medium text-gray-600 py-2 px-6 rounded-md hover:bg-blue-100 transition-all duration-200"
                  >
                    Email
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="link">
                  <div className="space-y-4">
                    <Label
                      htmlFor="url"
                      className="text-sm font-semibold text-gray-700"
                    >
                      URL
                    </Label>
                    <Input
                      id="url"
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="http://yourLink.com/"
                      className="w-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md p-3"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="email">
                  <div className="space-y-4">
                    <Label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="your-email@example.com"
                      className="w-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md p-3"
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="space-y-6">
                <div className="flex gap-6">
                  {/* QR Code Color */}
                  <div className="flex-1 space-y-2">
                    <Label
                      htmlFor="color"
                      className="text-sm font-semibold text-gray-700"
                    >
                      QR Code Color
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="color"
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="w-12 h-12 rounded-full border-none p-0"
                      />
                      <Input
                        type="text"
                        value={color}
                        onChange={(e) => handleColorChange(e.target.value, setColor)}
                        placeholder="Enter a color or #hex"
                        className="flex-1 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md p-3"
                      />
                    </div>
                  </div>

                  {/* Background Color */}
                  <div className="flex-1 space-y-2">
                    <Label
                      htmlFor="bgColor"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Background Color
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="bgColor"
                        type="color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="w-12 h-12 rounded-full border-none p-0"
                      />
                      <Input
                        type="text"
                        value={bgColor}
                        onChange={(e) => handleColorChange(e.target.value, setBgColor)}
                        placeholder="Enter a color or #hex"
                        className="flex-1 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md p-3"
                      />
                    </div>
                  </div>
                </div>

                {/* Logo Upload */}
                <div className="space-y-2">
                  <Label htmlFor="logo" className="text-sm font-semibold text-gray-700">
                    Logo (optional)
                  </Label>
                  <Input
                    id="logo"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setLogoFile(e.target.files[0]);
                        const reader = new FileReader();
                        reader.onloadend = () => setLogo(reader.result as string);
                        reader.readAsDataURL(e.target.files[0]);
                      }
                    }}
                    className="w-full border-2 border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* QR Code Display Section */}
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8">
              <div className="relative p-11 bg-white rounded-lg shadow-md mb-6">
                <LayoutGrid size={32} className="absolute top-2 right-2 text-gray-500 opacity-50" />
                <QRCodeSVG
                  id="qr-code-svg"
                  value={url}
                  size={256}
                  fgColor={color}
                  bgColor={bgColor}
                  imageSettings={
                    logo
                      ? {
                          src: logo,
                          height: 50,
                          width: 50,
                          excavate: true,
                        }
                      : undefined
                  }
                />
              </div>
              <button
                className="px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 transition-all duration-200"
                onClick={() => {
                  const svgElement = document.getElementById("qr-code-svg");
                  if (!svgElement) {
                    console.error("QR Code SVG element not found.");
                    return;
                  }
              
                  const svgData = new XMLSerializer().serializeToString(svgElement);
                  const canvas = document.createElement("canvas");
                  const ctx = canvas.getContext("2d");
              
                  if (!ctx) {
                    console.error("Failed to get 2D context for canvas.");
                    return;
                  }
              
                  const img = new Image();
              
                  img.onload = () => {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    const pngFile = canvas.toDataURL("image/png");
              
                    // Création d'un lien de téléchargement
                    const downloadLink = document.createElement("a");
                    downloadLink.href = pngFile;
                    downloadLink.download = "qr-code.png";
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);
                  };
              
                  img.onerror = () => {
                    console.error("Failed to load SVG as image.");
                  };
              
                  img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
                }}
              >
                Download QR Code
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QrCodeGenerator;



