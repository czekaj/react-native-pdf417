import Foundation
import React
import UIKit

final class BarcodeView: UIView {

  @objc var onBarcodePress: RCTBubblingEventBlock?
  @objc var text: NSString = ""
  @objc var rows: NSNumber = 0  // Default to 0, which means auto-calculate
  @objc var errorCorrectionLevel: NSNumber = 2  // Default to 2, a common value

  private var gestureRecognizer: UITapGestureRecognizer?

  override init(frame: CGRect) {
    super.init(frame: frame)

    gestureRecognizer = UITapGestureRecognizer(target: self, action: #selector(self.onPress))
    self.addGestureRecognizer(gestureRecognizer!)
  }

  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

  deinit {
    if gestureRecognizer != nil {
      self.removeGestureRecognizer(gestureRecognizer!)
    }
  }

  override func didSetProps(_ changedProps: [String]!) {
    self.setNeedsLayout()

    if changedProps.contains("text") || changedProps.contains("rows")
      || changedProps.contains("errorCorrectionLevel")
    {
      render()
    }
  }

  @objc func onPress(sender: UITapGestureRecognizer) {
    if sender.state == .ended {
      onBarcodePress?([:])
    }
  }

  private func render() {
    subviews.forEach({ $0.removeFromSuperview() })

    let data = (self.text as String).data(using: String.Encoding.ascii)

    DispatchQueue.global(qos: .userInitiated).async {
      if let filter = CIFilter(name: "CIPDF417BarcodeGenerator") {
        filter.setValue(data, forKey: "inputMessage")

        // Set the error correction level. Expected value is 0-8.
        filter.setValue(self.errorCorrectionLevel, forKey: "inputCorrectionLevel")

        // Set the number of rows if a value > 0 is provided.
        // This allows for explicit control over the barcode's height.
        if self.rows.intValue > 0 {
          filter.setValue(self.rows, forKey: "inputRows")
        }

        let transform = CGAffineTransform(scaleX: 3, y: 3)

        if let output = filter.outputImage?.transformed(by: transform) {
          let image = UIImage(ciImage: output)

          DispatchQueue.main.async {
            let imageView = UIImageView(image: image)
            imageView.frame = CGRect(
              x: 0, y: 0, width: self.bounds.width, height: self.bounds.height)
            imageView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
            self.addSubview(imageView)
          }
        }
      }
    }
  }
}
