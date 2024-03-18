import Download from '../../../public/images/download-icon.svg';
import Image from 'next/image';

const PdfDownloadButton = () => {
    const downloadPdf = () => {
      // Replace 'your-pdf-file.pdf' with the path to your PDF file
      const pdfUrl = '/public/Resume.pdf';
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'downloaded-file.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
        <button onClick={downloadPdf} className="text-[var(--clr-accent)] text-lg items-center font-semibold flex my-10 mx-5 px-5 py-1 border rounded border-white">
            Download
            <Image
                className="ml-3"
                src={Download}
                alt="Download Button for Resume"
                height={20}
            />
        </button>
    );
  };
  
export default PdfDownloadButton;
